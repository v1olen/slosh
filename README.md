# slosh-js

![npm](https://img.shields.io/npm/v/slosh-js)
![License](https://img.shields.io/github/license/v1olen/slosh)

**slosh-js** is a TypeScript utility library providing constructs for managing optional values (`Option`) and error states (`Result`).

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
    - [Option](#option)
    - [Result](#result)
- [Contributing](#contributing)
- [License](#license)

## Installation

You can install the library via npm:

```sh
npm install slosh-js
```

## Usage

This library mainly consists of two utility structures, `Option` and `Result`, which help to handle optional values and error states in a functional way.

### Option

The `Option` construct provides methods for handling cases where a value might be `null` or `undefined`. Here's how you can use it:

```ts
import { Option } from 'slosh-js';

let maybeValue = Option(getPotentiallyNullableValue());
let value = maybeValue.unwrapOr(defaultValue);
```

### Result

The `Result` construct provides a way to handle cases where a function might return an error. Here's a sample usage:

```ts
import { Result, Err } from 'slosh-js';

function mightFail(): Result<string, Error> {
  // something that might fail
  if (failed) {
    return new Err(new Error('Failure'));
  } else {
    return 'Success';
  }
}

let result = Result(mightFail());
result.match({
  Ok: (value) => console.log('Success: ', value),
  Err: (err) => console.error('Error: ', err),
});
```

## Contributing

We welcome contributions to this library. To contribute, you can open an issue or submit a pull request [here](https://github.com/v1olen/slosh).

## License

slosh-js is licensed under the Apache License 2.0. See the `LICENSE` file for more information.
