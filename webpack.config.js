const path = require('path');

module.exports = {
  entry: './src/index.jsx',
  mode: 'production',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.svg$/,
        use: ['@srvg/webpack']
      },
      {
        test: /\.(gif|png|jep?g)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            
          },
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['sass-loader','style-loader' ]
      }
    ]
  },
  resolve: {
    extensions: ['.jsx', '.js', 'ts']
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist')
  },
  devtool: 'eval-cheap-module-source-map',
  performance: {
    maxEntrypointSize: 500000,
    maxAssetSize: 500000,
    hints: process.env.NODE_ENV === "production" ?  'error' : false
  },
};
