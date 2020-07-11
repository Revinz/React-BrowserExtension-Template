const path = require("path");
const TerserJSPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = function override(config, env) {
  //A 'main' entry point is required. Otherwise it gives a
  //'Cannot read property 'filter' of undefined' error.
  config.entry = {
    main: "./src/main_temp.js",
    background: "./src/background.tsx",
    helloworld: "./src/HelloWorld.tsx",
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
