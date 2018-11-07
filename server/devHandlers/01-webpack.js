const webpack = require("webpack");
const config = require("../../webpack.config");
const webpackDevMiddleware = require("koa-webpack-dev-middleware");
const webpackHotMiddleware = require("koa-webpack-hot-middleware");
const convert = require("koa-convert");

exports.init = app => {
  if (process.env.NODE_ENV !== "test") {
    const compiler = webpack(config);

    app.use(
      webpackDevMiddleware(compiler, {
        hot: true,
        publicPath: config.output.publicPath,
        stats: {
          colors: true
        }
      })
    );

    app.use(
      convert(
        webpackHotMiddleware(compiler, {
          log: console.log
        })
      )
    );
  }
};
