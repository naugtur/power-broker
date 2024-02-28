const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const LavaMoat = require("@lavamoat/webpack");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  devtool: "source-map",
  optimization: {
    minimize: false,
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: [
              [
                "@babel/plugin-transform-react-jsx",
                {
                  pragma: "h",
                  pragmaFrag: "Fragment",
                },
              ],
            ],
          },
        },
      },
    ],
  },

  plugins: [
    new LavaMoat({
      readableResourceIds: true,
      HtmlWebpackPluginInterop: true,
      emitPolicySnapshot: true,
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],

  resolve: {
    extensions: [".js", ".jsx"],
  },
};
