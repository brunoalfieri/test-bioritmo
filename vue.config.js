module.exports = {
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