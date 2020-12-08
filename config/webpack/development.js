process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const environment = require('./environment')

module.exports = environment.toWebpackConfig()

environment.config.devServer.watchContentBase = true
environment.config.devServer.contentBase = [
  path.join(__dirname, '../../app/views')
]