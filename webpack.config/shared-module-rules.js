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
    test: /\.(jpg|png)$/i,
    loader: `file-loader`,
    options: {
      outputPath: `img`,
      name: `[name].[ext]`
    }
  },
  {
    test: /\.(woff2|woff|ttf|eot)$/i,
    loader: `file-loader`,
    options: {
      outputPath: `fonts`,
      name: `[name].[ext]`
    }
  }
];
