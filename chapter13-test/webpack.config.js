const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  plugins: [new HtmlWebpackPlugin({ template: "index.html" })],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: [
            "@babel/preset-env",
            { plugins: ["@babel/plugin-proposal-class-properties"] },
          ],
        },
      },
    ],
  },
  devtool: "eval-source-map",
  devServer: {
    host: "0.0.0.0",
    port: 8000,
  },
};
