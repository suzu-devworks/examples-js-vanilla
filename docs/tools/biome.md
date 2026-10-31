# Biome

Biome is a tool for formatting, linting, and checking JavaScript and TypeScript code.

The greatest advantage is, quite simply, that multiple tools are consolidated into a single definition file.

## Installation

To install Biome as a development dependency, run:

```bash
pnpm add -wD @biomejs/biome
```

If you specify `w`, it will be installed in the `workspace` root.

## Configuration

### `biome.json`

First, generate the initial settings file using the command:

```bash
pnpm biome init
```

### Formatter

Configure how code is formatted in the `formatter` section.

```json
{
  "formatter": {
    "enabled": true,
    "indentStyle": "space",
    "indentWidth": 2,
    "lineEnding": "lf",
    "lineWidth": 100
  },
  "javascript": {
    "formatter": {
      "quoteStyle": "single",
      "semicolons": "asNeeded",
      "trailingComma": "es5"
    }
  }
}
```

### Linter

I’d like to use "recommended" as a starting point, but...

```json
  "linter": {
    "enabled": true,
    "rules": {
      "preset": "recommended"
    },
    "includes": [
      "**",
      "!.*/**",
      "!**/build",
      "!**/coverage",
      "!**/dist/**",
      "!**/temp/**",
      "!packages/examples-express-ejs/**/*.css",
      "!**/generated/*.css",
      "!**/dist/**/*.css"
    ]
  },
```

## Migration

Biome can automatically migrate your existing ESLint, Prettier, and Stylelint configuration files
to the equivalent `biome.json` file.

```bash
pnpm biome migrate prettier --write
pnpm biome migrate eslint --write
pnpm biome migrate stylelint --write
```

## Run

Formats the specified files.

```bash
pnpm biome format
```

Runs the linter on the specified files.

```bash
pnpm biome lint
```

Checks the specified files for formatting, linting, and assist actions.

```bash
pnpm biome check
```

Runs formatting checks, linting checks, and assist actions in CI without modifying files.

```bash
pnpm biome ci
```

## Package scripts

Add a lint script to your `package.json`:

```json
"scripts": {
  "lint": "biome check .",
  "format": "biome format ."
}
```

## VSCode Extension

Use the [Biome Extension for VS Code](https://marketplace.visualstudio.com/items?itemName=biomejs.biome)
for Visual Studio Code.

Typical settings are as follows:

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.biome": "explicit",
    "source.organizeImports.biome": "explicit"
  }
}
```

## References

- [Biome Documentation](https://biomejs.dev/)
- [Biome GitHub Repository](https://github.com/biomejs/biome)
