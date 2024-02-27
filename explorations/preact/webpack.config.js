const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const LavaMoat = require('@lavamoat/webpack')

module.exports = {
  // Entry point of your application
  entry: "./src/index.js",
  mode: "development",
  devtool: "source-map",
  optimization: {
    minimize: false,
  },

  // Output configuration for Webpack
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },

  // Module rules for processing different types of files
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Match both .js and .jsx files
        // exclude: /node_modules/,
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

  // Plugins for additional functionality
  plugins: [
    new LavaMoat({
      generatePolicy: true,
      readableResourceIds: true,
      HtmlWebpackPluginInterop: true,
      emitPolicySnapshot: true,
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html", // Path to your HTML template
    }),
  ],

  // Development server configuration
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 9000,
  },

  // Resolve .js and .jsx file extensions
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      react: "preact/compat",
      "react-dom/test-utils": "preact/test-utils",
      "react-dom": "preact/compat", // Must be below test-utils
      "react/jsx-runtime": "preact/jsx-runtime",
    },
  },
};
