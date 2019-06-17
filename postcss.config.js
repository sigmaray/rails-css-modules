module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-flexbugs-fixes'),
    require('postcss-preset-env')({
      autoprefixer: {
        flexbox: 'no-2009'
      },
      stage: 3
    }),
    require('postcss-modules')({
      modules: true,
      generateScopedName: '[name]__[local]___[hash:base64:5]',
      globalModulePaths: [/\/global\//]
    })
  ]
}
