# Biome

Biome is a tool for formatting, linting, and checking JavaScript and TypeScript code.  
It is recommended to install Biome as a development dependency in your project,
but it is also available as a standalone executable that does not require Node.js.

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

## Migration

Biome can automatically migrate your existing ESLint, Prettier, and Stylelint configuration files
to the equivalent `biome.json` file.

```bash
pnpm biome migrate prettier --write
pnpm biome migrate eslint --write
pnpm biome migrate stylelint --write
```

### Formatter

The formatter section in `biome.json` allows you to configure how your code is formatted.

```json
{
  "formatter": {
    "enabled": true,
    "indentStyle": "space",
    "indentWidth": 2,
    "lineEnding": "lf",
    "lineWidth": 120
  },
  "javascript": {
    "formatter": {
      "quoteStyle": "double",
      "semicolons": "asNeeded",
      "trailingComma": "es5"
    }
  }
}
```

## Run

## References

- [Biome Documentation](https://biomejs.dev/)
- [Biome GitHub Repository](https://github.com/biomejs/biome)
