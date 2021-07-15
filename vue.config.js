module.exports = {
    devServer: {
      proxy: {
        '^/api': {
          target: 'https://localhost:3080/',
          changeOrigin: true
        },
      }
    }
  }