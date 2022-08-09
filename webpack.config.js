const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "./src/index.js"),
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      { test: /\.css$/, exclude: /node_modules/, use: "css-loader" },
      { test: /\.json$/, exclude: /node_modules/, use: "json-loader" },
    ],
    // loaders: {
    //   test: /\.(js)$/,
    //   exclude: /(node_modules|bower_components)/,
    //     loaders: [
    //         'react-hot',
    //         'babel?presets[]=react,presets[]=es2015,presets[]=stage-0'
    //   ]
    // },
  },
  resolve: {
    extensions: ["*", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
  },
  devServer: {
    static: path.resolve(__dirname, "./dist"),
  },
};
