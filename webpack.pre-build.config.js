const path = require(`path`);
const HtmlWebpackPlugin = require(`html-webpack-plugin`);
const MiniCssExtractPlugin = require(`mini-css-extract-plugin`);

const plugins = [
  new HtmlWebpackPlugin({
    filename: `index.html`,
    template: `src/index.html`
  }),
  new MiniCssExtractPlugin({
    filename: `/css/main.css`
  })
];

module.exports = {
  mode: `development`,
  entry: `./src/index.js`,
  plugins,
  output: {
    filename: `bundle.js`,
    path: path.resolve(__dirname, `pre`)
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
        use: [
          MiniCssExtractPlugin.loader,
          `css-loader`
        ]
      },
      {
        test: /\.(jpg|png|woff|otf)$/i,
        use: [`file-loader`]
      }
    ],
  },
  resolve: {
    extensions: [`.js`, `.jsx`]
  },
  devtool: `source-map`,
  optimization: {
    minimize: false,
  }
};
