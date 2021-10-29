const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/js/main.js',
  plugins: [new HtmlWebpackPlugin({ template: 'index.html' })],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: ['file-loader'],
      },
    ],
  },
  devtool: 'eval-source-map',
  devServer: {
    host: '0.0.0.0',
    port: 8000,
    stats: 'errors-warnings',
    open: true,
  },
};
