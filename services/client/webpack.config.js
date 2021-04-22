const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['/src/index.tsx'],
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },

      { test: /\.(js|jsx)$/, use: 'babel-loader' },
      { test: /\.(ts|tsx)$/, use: 'ts-loader' },

      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: 'file-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack Boilerplate',
      template: path.resolve(__dirname, './index.html'),
      filename: 'index.html',
    }),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  mode: 'development',
  devServer: {
    inline: false,
    host: '0.0.0.0',
    port: 3000,
  },
};
