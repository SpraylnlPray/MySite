const HtmlWebPackPlugin = require('html-webpack-plugin');
const SitemapPlugin = require('sitemap-webpack-plugin').default;
const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');
const CopyWebpackPlugin = require('copy-webpack-plugin');

dotenv.config().parsed;

const paths = [
  {
    path: '/',
    lastmod: '2020-10-16',
    priority: '0.6',
    changefreq: 'monthly',
  },
  {
    path: '/about',
    lastmod: '2020-09-21',
    priority: '0.6',
    changefreq: 'weekly',
  },
  {
    path: '/projects',
    lastmod: '2020-09-23',
    priority: '0.8',
    changefreq: 'weekly',
  },
  {
    path: '/experience',
    lastmod: '2020-09-21',
    priority: '0.8',
    changefreq: 'weekly',
  },
  {
    path: '/contact',
    lastmod: '2020-09-21',
    priority: '0.3',
    changefreq: 'monthly',
  },
];

module.exports = () => {
  const envKeys = Object.keys(process.env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(process.env[next]);
    return prev;
  }, {});
  return {
    entry: './src/index.js',
    output: {
      path: path.join(__dirname, '/dir'),
      filename: 'bundle.js',
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.s[ac]ss$/i,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        {
          test: /\.(jpe?g|gif|png|svg|woff|ttf|wav|mp3|pdf)$/,
          loader: 'file-loader',
        },
      ],
    },
    devtool: 'source-map',
    devServer: {
      host: '192.168.178.37',
      port: 8080,
      disableHostCheck: true,
      historyApiFallback: true,
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: './src/index.html',
        filename: './index.html',
      }),
      new webpack.DefinePlugin(envKeys),
      new SitemapPlugin('https://danielwildegger.com', paths),
      new CopyWebpackPlugin({
        patterns: [
          { from: './robots.txt', to: './robots.txt' },
          { from: './icons/favicon.png', to: './icons/favicon.png' },
        ],
      }),
    ],
  };
};
