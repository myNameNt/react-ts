const htmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
module.exports = {
  entry: {
    'app': './src/index.tsx'
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].[chunkhash:8].js'
  },
  resolve: {
    extensions: ['.js','.ts','.tsx', 'css']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {
            }
          },
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      title: '我是第一个ts react',
      template: './src/tpl/index.html'
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
}