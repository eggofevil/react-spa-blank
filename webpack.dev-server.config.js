const HtmlWebpackPlugin = require(`html-webpack-plugin`);

const plugins = [
  new HtmlWebpackPlugin({
    filename: `index.html`,
    template: `src/index.html`,
  }),
];

module.exports = {
  entry: `./src/index.js`,
  mode: `development`,
  plugins,
  devServer: {
    open: false,
    port: 1337,
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: `html-loader`,
        options: {
          sources: false
        }
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`,
        }
      },
      {
        test: /\.css$/i,
        use: [`style-loader`, `css-loader`] // the order is important !!!
      },
      {
        test: /\.png$/i,
        use: [`file-loader`]
      }
    ],
  },
  resolve: {
    extensions: [`.js`, `.jsx`]
  },
  devtool: `source-map`
};
