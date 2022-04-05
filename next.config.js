const StylelintPlugin = require('stylelint-webpack-plugin')
module.exports = {
  reactStrictMode: true,

  webpack: (config, options) => {
    config.plugins.push(new StylelintPlugin())
    return config
  },
}
