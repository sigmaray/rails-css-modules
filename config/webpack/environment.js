const { environment } = require('@rails/webpacker');
const merge = require('webpack-merge');

['css', 'sass'].forEach(function(item) {
  const myCssLoaderOptions = {
    modules: false
  };

  const CSSLoader = environment.loaders
    .get(`module${item.charAt(0).toUpperCase() + item.slice(1)}`)
    .use.find(el => el.loader === 'css-loader');

  CSSLoader.options = merge(CSSLoader.options, myCssLoaderOptions);
});

module.exports = environment
