const HtmlWebPackPlugin = require( 'html-webpack-plugin' );
const path = require( 'path' );
const webpack = require( 'webpack' );
const dotenv = require( 'dotenv' );

const env = dotenv.config().parsed;
// const envKeys = Object.keys( env ).reduce( ( prev, next ) => {
//   prev[ `process.env.${ next }` ] = JSON.stringify( env[ next ] );
//   return prev;
// }, {} );

module.exports = () => {
  console.log( process.env );
  const envKeys = Object.keys( process.env ).reduce( ( prev, next ) => {
    prev[ `process.env.${ next }` ] = JSON.stringify( process.env[ next ] );
    return prev;
  }, {} );
  console.log( envKeys );
  return {
    entry: './src/index.js',
    output: {
      path: path.join( __dirname, '/dir' ),
      // path: path.resolver( __dirname, 'build' ),
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
        // template: path.resolve('./index.html'),
        template: "./src/index.html",
        filename: "./index.html"
      } ),
      new webpack.DefinePlugin( envKeys ),
    ]
  };
}