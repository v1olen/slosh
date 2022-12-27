module.exports = {
    env: {
        es6: true,
    },
    extends: [
        `plugin:@typescript-eslint/eslint-recommended`,
    ],
    globals: {
        Atomics: `readonly`,
        SharedArrayBuffer: `readonly`,
    },
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: `module`,
    },
    overrides: [{
        files: [`*.ts`, `*.tsx`],
        extends: [
            `plugin:@typescript-eslint/recommended`,
            `plugin:@typescript-eslint/recommended-requiring-type-checking`,
        ],
        parserOptions: {
            project: [`./tsconfig.json`],
        },
    }],
    plugins: [
        `@typescript-eslint`,
        `eslint-plugin-tsdoc`,
    ],
    rules: {
        "tsdoc/syntax": `warn`,
        "no-use-before-define": [`off`],
        indent: [`warn`, 4],
        "linebreak-style": [`warn`, `unix`],
        quotes: [`error`, `backtick`],
        "comma-dangle": [`error`, `always-multiline`],
        semi: [`error`, `always`],
        "require-await": [`off`],
        "lines-between-class-members": [`warn`],
        "@typescript-eslint/no-unused-vars": [`warn`],
        eqeqeq: [`off`],
        "import/no-named-as-default": [`off`],
        "accessor-pairs": [`off`],
        "no-unused-expressions": [`off`],
        "no-useless-escape": [`off`],
        "space-before-function-paren": [`error`, `never`],
        "arrow-parens": [`error`, `as-needed`],
        curly: [`warn`, `multi`],
    },
};
