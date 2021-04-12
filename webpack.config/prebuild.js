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

let rules = require(`./shared-module-rules.js`);
const preBuildRules = {
  test: /\.css$/i,
  use: [
    MiniCssExtractPlugin.loader,
    `css-loader`
  ]
};
rules.push(preBuildRules);

module.exports = {
  mode: `development`,
  entry: `./src/index.js`,
  plugins,
  output: {
    filename: `bundle.js`,
    path: path.resolve(__dirname, `../pre`)
  },
  module: {
    rules
  },
  resolve: {
    extensions: [`.js`, `.jsx`]
  },
  devtool: `source-map`,
  optimization: {
    minimize: false,
  }
};
