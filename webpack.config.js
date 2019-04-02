const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
   mode: 'development',
   entry: './src/index.js',
   output: {
      path: path.resolve('./genericusermanagement'),
      filename: 'index_bundle.js'
   },

   devServer: {
      inline: false,
      port: 8080,
      historyApiFallback: true,
      hot: true
   },
   resolveLoader: {
      modules: [path.resolve('./node_modules')]
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
                  presets: ['@babel/preset-env', '@babel/react'],
               }
            }
         }
      ]
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: './index.html'
      }),
      new CopyWebpackPlugin([
         { from: 'index.html', to: 'index.html' },
         { from: 'manifest.json', to: 'manifest.json' },
         { from: 'src/fonts', to: 'src/fonts' },
         { from: 'src/icons', to: 'src/icons' },
         { from: 'src/images', to: 'src/images' },
         { from: 'src/jsonfiles', to: 'src/jsonfiles' },
         { from: 'src/App.css', to: 'src/App.css' },
         { from: 'src/home.css', to: 'src/home.css' },
         { from: 'src/index.css', to: 'src/index.css' }
      ])
   ]
}