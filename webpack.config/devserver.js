const HtmlWebpackPlugin = require(`html-webpack-plugin`);

let rules = require(`./shared-module-rules.js`);
const devServerRules = {
  test: /\.css$/i,
  use: [`style-loader`, `css-loader`] // the order is important !!!
};
rules.push(devServerRules);

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
    rules
  },
  resolve: {
    extensions: [`.js`, `.jsx`]
  },
  devtool: `source-map`
};
