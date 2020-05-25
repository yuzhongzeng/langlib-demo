const webpack = require("webpack");

module.exports = {
  publicPath: "./",

  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "windows.jQuery": "jquery"
      })
    ]
  },
  devServer: {
    overlay: {
      warnings: true
    }
  },
  css: {
    sourceMap: true, // 是否开启 CSS source maps
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/scss/var.scss";` // mixin的全局引入,低版本的用 data
      }
    }
  }
};
