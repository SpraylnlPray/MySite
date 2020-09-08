const HtmlWebPackkPlugin = require( 'html-webpack-plugin' );

module.exports = {
  "mode": "development",
  "entry": "./src/index.js",
  "output": {
    "path": __dirname + '/dir',
    "filename": "bundle.js"
  },
  "devtool": "source-map",
  "devServer": {
    host: '192.168.178.37',
    port: 8080,
    disableHostCheck: true,
  },
  "module": {
    "rules": [
      {
        "enforce": "pre",
        "test": /\.js$/,
        "exclude": /node_modules/,
        "loader": "eslint-loader",
        "options": {
          "emitWarning": true,
          "failOnoError": false,
          "failOnWarning": false
        }
      },
      {
        "test": /\.(js|jsx)$/,
        "exclude": /node_modules/,
        "use": {
          "loader": "babel-loader"
        }
      },
      {
        "test": /\.css$/,
        "use": [
          "style-loader",
          "css-loader"
        ]
      },
      {
        "test": /\.html$/,
        "use": [
          {
            "loader": "html-loader"
          }
        ]
      }
    ]
  },
  "plugins": [
    new HtmlWebPackkPlugin( {
      template: "./src/index.html",
      filename: "./index.html"
    } )
  ]
}