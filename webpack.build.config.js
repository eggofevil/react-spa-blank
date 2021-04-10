const path = require(`path`);
const HtmlWebpackPlugin = require(`html-webpack-plugin`);
const MiniCssExtractPlugin = require(`mini-css-extract-plugin`);
const CssMinimizerPlugin = require(`css-minimizer-webpack-plugin`);

const plugins = [
  new HtmlWebpackPlugin({
    filename: `index.html`,
    template: `src/index.html`,
  }),
  new MiniCssExtractPlugin({
    filename: `main.css`
  })
];

module.exports = {
  mode: `production`,
  entry: `./src/index.js`,
  plugins,
  output: {
    filename: `bundle.js`,
    path: path.resolve(__dirname, `pub`)
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: `html-loader`,
        options: {
          // Disables attributes processing
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
        test: /\.png$/i,
        use: [`file-loader`]
      }
    ],
  },
  resolve: {
    extensions: [`.js`, `.jsx`]
  },
  optimization: {
    minimize: true,
    minimizer: [
      `...`,
      new CssMinimizerPlugin(),
    ]
  }
};
