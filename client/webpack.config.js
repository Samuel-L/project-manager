const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
})

const CopyWebpackPlugin = require('copy-webpack-plugin')
const CopyWebpackPluginConfig = new CopyWebpackPlugin([
  {from: './src/alertSounds/alert.mp3',
  to: path.resolve('dist') + '/alert.mp3',}
])

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader'] },
			{ test: [/\.js?$/, /\.jsx$/], loader: 'eslint-loader', exclude: /node_modules/},
      { test: /\.svg$/, use: [{ loader: 'babel-loader' }, { loader: 'react-svg-loader', options: { jsx: true }}]}
    ]
  },
	resolve: { extensions: ['.js', '.jsx'] },
  plugins: [HtmlWebpackPluginConfig, CopyWebpackPluginConfig]
}
