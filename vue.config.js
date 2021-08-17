module.exports = {
  devServer: {
    http2: true,
  },
  css: {
    loaderOptions: {
      // pass options to sass-loader
      sass: {
        prependData: `
          @import "@/assets/scss/_variables.scss";
        `
      }
      // pass Less.js Options to less-loader
    }
  }
}