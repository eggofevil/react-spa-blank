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

const sharedRules = require(`./shared-module-rules.js`);
const buildRules = [
  {
    test: /\.css$/i,
    use: [
      MiniCssExtractPlugin.loader,
      `css-loader`
    ]
  },
  {
    test: /\.(s[ac]ss)$/i,
    use: [
      MiniCssExtractPlugin.loader,
      `css-loader`,
      `sass-loader`
    ]
  }
];
const rules = sharedRules.concat(buildRules);

module.exports = {
  mode: `production`,
  entry: `./src/index.js`,
  plugins,
  output: {
    filename: `bundle.js`,
    path: path.resolve(__dirname, `../pub`)
  },
  module: {
    rules
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
