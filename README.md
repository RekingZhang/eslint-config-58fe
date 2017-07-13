# eslint-config-58fe

This package provides 58fe's base JS .eslintrc as an extensible shared config.

## Usage

### eslint-config-elemefe

Our default export contains all of our ESLint rules, including ECMAScript 6.

First, install this package

```sh
npm install eslint-config-58fe eslint babel-eslint eslint-plugin-import  --save-dev
```

Then add following contents to your .eslintrc file

{
  "extends": "58fe"
}
