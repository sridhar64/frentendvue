module.exports = {
    devServer: {
      proxy: {
        '^/api': {
          target: 'https://vuenodeapp9966.herokuapp.com/',
          changeOrigin: true
        },
      }
    }
  }