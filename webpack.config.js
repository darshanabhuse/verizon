const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { WebpackWarPlugin } = require('webpack-war-plugin');

module.exports = {
   mode: 'development',
   entry: './src/index.js',
   output: {
      path: path.join(__dirname, '/bundle'),
      filename: 'index_bundle.js'
   },

   devServer: {
      inline: false,
      port: 8080,
      historyApiFallback: true,
      hot: true
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
      new WebpackWarPlugin(),
      new HtmlWebpackPlugin({
         template: './index.html'
      })      
   ]
}