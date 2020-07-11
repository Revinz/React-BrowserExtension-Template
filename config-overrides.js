const path = require("path");
const TerserJSPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = function override(config, env) {
  config.entry = {
    youtube: "./src/HelloWorld.tsx",
    main: "./src/background.tsx",
  };
  config.output = {
    filename: "[name]/bundle.js",
    path: path.resolve(__dirname, "build"),
  };

  config.optimization = {
    minimize: false,
    minimizer: [new TerserJSPlugin(), new OptimizeCSSAssetsPlugin()],
  };

  config.plugins[4] = new MiniCssExtractPlugin({
    filename: "[name]/bundle.css",
    allChunks: false,
  });

  config.plugins[5] = new CopyWebpackPlugin({
    patterns: [
      {
        from: "./build",

        globOptions: {
          ignore: [
            // Ignore all `txt` files
            "**/manifest*.json",
          ],
        },

        to: "./assets",
      },
    ],
  });

  return config;
};
