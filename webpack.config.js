const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   mode: 'development',
   entry: './src/index.js',
   output: {
      path: path.join(__dirname, '/dist'),
      filename: 'index.js',
  },

   devServer: {
      inline: true,
      port: 8080
   },
   resolveLoader: {
      modules: [path.join(__dirname, 'node_modules')]
   },
   resolve: {
      extensions: ['*', '.js', '.jsx']
   },
   module: {
      rules: [
         {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
               loader: 'babel-loader',
               options: {
                  presets: ['@babel/preset-env','@babel/react'],
               }
            }
         }
      ]
   },
   plugins:[
      new HtmlWebpackPlugin({
         template: './index.html'
      })
   ]
}