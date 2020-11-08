const { config } = require('vue')
const webpack = require('webpack')
const WebpackHotMiddleware = require('webpack-hot-middleware')
const clientConfig = require('./webpack.client.config')

module.exports = function setupDevSever(app){
  clientConfig.entry.app = [
    'webpack-hot-middleware/client',
   clientConfig.entry.app]
   clientConfig.plugins.push(
     new webpack.HotModuleReplacementPlugin()
   )
  const clientCompiler = webpack(clientConfig)
  app.use(
    require('webpack-dev-middleware')(clientCompiler, {
      stats: {
        colors: true
      }
    })
  )
  app.use(require('webpack-hot-middleware')(clientCompiler))
}
