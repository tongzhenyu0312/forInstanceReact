module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'entry',
        corejs: 3,
      },
    ],
    '@babel/preset-react',
  ],
  // react+webpack项目中，必须使用插件机制，才可以解决ReferenceError: regeneratorRuntime is not defined的问题
  // https://stackoverflow.com/questions/65487071/uncaught-referenceerror-regeneratorruntime-is-not-defined-in-react-17-webpack
  plugins: [['@babel/plugin-transform-runtime']],
};
