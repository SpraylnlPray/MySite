const HtmlWebPackPlugin = require( 'html-webpack-plugin' );
const path = require( 'path' );
const webpack = require( 'webpack' );
const dotenv = require( 'dotenv' );

dotenv.config().parsed;

module.exports = () => {
  const envKeys = Object.keys( process.env ).reduce( ( prev, next ) => {
    prev[ `process.env.${ next }` ] = JSON.stringify( process.env[ next ] );
    return prev;
  }, {} );
  return {
    entry: './src/index.js',
    output: {
      path: path.join( __dirname, '/dir' ),
      filename: 'bundle.js',
      publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.css$/,
          use: [ 'style-loader', 'css-loader' ]
        },
        {
          test: /\.(jpe?g|gif|png|svg|woff|ttf|wav|mp3|pdf)$/,
          loader: 'file-loader',
        },
      ]
    },
    devtool: 'source-map',
    devServer: {
      host: '192.168.178.37',
      port: 8080,
      disableHostCheck: true,
      historyApiFallback: true,
    },
    plugins: [
      new HtmlWebPackPlugin( {
        template: "./src/index.html",
        filename: "./index.html"
      } ),
      new webpack.DefinePlugin( envKeys ),
    ]
  };
}