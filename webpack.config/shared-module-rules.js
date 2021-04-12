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
    test: /\.(jpg|png|woff2|woff|ttf|eot)$/i,
    use: [`file-loader`]
  }
];
