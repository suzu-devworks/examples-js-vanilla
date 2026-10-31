# stylelint

A powerful CSS linter that helps you avoid errors and enforce conventions.

## Installation

You can use `npm init stylelint` to launch `create-stylelint`,
but the output configuration file will be `.stylelintrc.json`.  
Here, we configure manually.

```shell
npm install --save-dev stylelint stylelint-config-standard-scss
```

```shell
yarn add -D stylelint stylelint-config-standard-scss
```

```shell
pnpm add -D stylelint stylelint-config-standard-scss
```

## Configuration

### `stylelint.config.js`

See [Stylelint configuration guide](https://stylelint.io/user-guide/configure).

```js
/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-standard-scss'],
}
```

## Run

See [Stylelint CLI documentation](https://stylelint.io/user-guide/cli).

```shell
npx stylelint "**/*.css"
```

```shell
yarn dlx stylelint "**/*.css"
```

```shell
pnpm dlx stylelint "**/*.css"
```

## Plugins

For property order, you can use the `stylelint-order` plugin and the `stylelint-config-recess-order` preset.

### Order

```shell
npm install --save-dev stylelint stylelint-order stylelint-config-recess-order
```

```js
/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-recess-order'],
}
```

## VSCode Extension

Use the [Stylelint extension](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
for Visual Studio Code.

Typical settings are as follows:

```json
"[css][scss][sass]": {
  "editor.codeActionsOnSave": {
    "source.fixAll.stylelint": "explicit"
  },
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

It might be better to turn off the standard features：

```json
{
  "css.validate": false,
  "less.validate": false,
  "scss.validate": false
}
```

## References

- [Stylelint Official Site](https://stylelint.io/)
- [Stylelint GitHub Repository](https://github.com/stylelint/stylelint)
