const HtmlWebpackPlugin = require(`html-webpack-plugin`);

const sharedRules = require(`./shared-module-rules.js`);
const devServerRules = [
  {
    test: /\.css$/i,
    use: [`style-loader`, `css-loader`]
  },
  {
    test: /\.(s[ac]ss)$/i, // sass or scss
    use: [`style-loader`, `css-loader`, `sass-loader`] // the order is important !!!
  }
];
const rules = sharedRules.concat(devServerRules);

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
