export interface Err<T> {
    value: T,
};

export type ResultMatchCases<T, U, V> = {
    Ok: (value: T) => V;
    Err: (value: U) => V;
} | {
    Ok: (value: T) => V;
    _: () => V;
} | {
    Err: (value: U) => V;
    _: () => V;
};

export type OptionMatchCases<T, V> = {
    Some: (value: T) => V;
    _: () => V;
} | {
    None: () => V;
    _: () => V;
} | {
    Some: (value: T) => V;
    None: () => V;
};

export class Err<T> implements Err<T> {
    value!: T;

    constructor(value: T) {
        this.value = value;
    }
}

export type Result<T, E> = T | Err<E>;

export function Result<T, E>(value: Result<T, E>) {
    return {
        value,
        unwrapOr(alternative: T) {
            if (value instanceof Err)
                return alternative;

            return value;
        },
        match<R>(cases: ResultMatchCases<T, E, R>) {
            let result: R = null as R;

            if (value instanceof Err) {
                if (`Err` in cases) result = cases.Err(value.value);
                else if (`Ok` in cases && `_` in cases) result = cases._();
            } else if (!(value instanceof Err))
                if (`Ok` in cases) result = cases.Ok(value);
                else if (`Err` in cases && `_` in cases) result = cases._();

            return result;
        },
    };
}

export type Option<T> = T | null | undefined;
export const None = null;

interface ReturnedOption<T> extends ReturnType<typeof _Option<T>> {};

function _Option<T>(value: Option<T>) {
    return {
        value,
        unwrapOr(alternative: T) {
            if (value === null || value === undefined)
                return alternative;

            return value;
        },
        match<R>(cases: OptionMatchCases<T, R>) {
            let result: R = null as R;

            if (value === null || value === undefined) {
                if (`None` in cases) result = cases.None();
                else if (`Some` in cases && `_` in cases) result = cases._();
            } else if (`Some` in cases) result = cases.Some(value);
            else if (`None` in cases && `_` in cases) result = cases._();

            return result;
        },
        map<R>(mappingFunction: (unwrapedValue: T) => Option<R>) {
            if (value === null || value === undefined)
                return value === null ? null : undefined;

            return mappingFunction(value);
        },
        mapChain<R>(mappingFunction: (unwrapedValue: T) => Option<R>): ReturnedOption<R> {
            return _Option(this.map(mappingFunction));
        },
        isOk() {
            return value !== undefined && value !== null;
        },
    };
}

export const Option = _Option;
