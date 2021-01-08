const path = require('path')
console.warn(`[BUILD_TYPE]: ${process.env.BUILD_TYPE}`)
module.exports = {
  // github page
  publicPath: process.env.BUILD_TYPE === 'Web' ? '/web-component-demo/' : '/',
  configureWebpack: config => {
    config.resolve.modules = [
      path.resolve(__dirname, 'src'),
      path.resolve(__dirname, 'modules'),
      'node_modules',
      path.resolve(__dirname, 'node_modules'),
    ]
  },
  devServer: {
    watchOptions: {
      poll: true
    },
  },
  transpileDependencies: [
    'vuetify',
  ]
}