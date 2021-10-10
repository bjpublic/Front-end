const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/js/main.js',
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: '[name].[contenthash].js',
    environment: {
      arrowFunction: false,
    },
  },
  plugins: [
    new HtmlWebpackPlugin({ template: 'index.html' }),
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: ['file-loader'],
      },
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, 'src/js')],
        exclude: /node_modules/,
        use: { loader: 'babel-loader' },
      },
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
      new CssMinimizerPlugin(),
    ],
  },
};
