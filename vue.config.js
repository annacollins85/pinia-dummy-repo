const IS_PRODUCTION = process.env.VUE_APP_MODE === 'production'

module.exports = {
  publicPath: process.env.PUBLIC_PATH || '/',
  lintOnSave: true,
  devServer: {
    port: 3000
  },
  configureWebpack: {
    devtool: IS_PRODUCTION ? 'hidden-source-map' : 'source-map',
    resolve: {
      extensions: ['.js', '.vue', '.json'],
    }
  }
}
