export default {
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  singleQuote: true,
  bracketSpacing: true,
  proseWrap: 'preserve',
  semi: true,
  quoteProps: 'as-needed',
  arrowParens: 'avoid',
  trailingComma: 'es5',
  jsxSingleQuote: true,
  htmlWhitespaceSensitivity: 'css',
  vueIndentScriptAndStyle: true,
  insertPragma: false,
  requirePragma: false,
  endOfLine: 'lf',

  overrides: [
    {
      files: ['*.yaml', '*.yml', '*.json'],
      options: {
        tabWidth: 2,
      },
    },
    {
      files: ['.editorconfig', '*.md'],
      options: {
        tabWidth: 0,
      },
    },
  ],
};
