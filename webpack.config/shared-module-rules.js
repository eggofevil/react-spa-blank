module.exports = [
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
    test: /\.(jpg|png|woff|otf)$/i,
    use: [`file-loader`]
  }
];
