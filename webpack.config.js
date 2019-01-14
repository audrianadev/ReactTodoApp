var webpack = require('webpack');
var path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports ={
  entry: [
    "script-loader!jquery/dist/jquery.min.js",
    "script-loader!foundation-sites/dist/js/foundation.min.js",
    "./app/app.jsx"
  ],
  externals: {
    jquery: 'jQuery',
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    }),
    new MiniCssExtractPlugin({
      filename: "./public/css/style.css",
      chunkFilename: "[name].css"
    })
  ],
  output: {
    path:__dirname,
    filename: './public/bundle.js'
  },
  resolve:{
    modules: [
      __dirname,
      'node_modules',
      './app/components',
      './app/api'
    ],
    alias:{
      applicationStyles: 'app/styles/app.scss',
      actions: 'app/actions/actions.jsx',
      reducers: 'app/reducers/reducers.jsx',
      configureStore: 'app/store/configureStore.jsx'
    },
    extensions: ['.*','.js', '.jsx']
  },
  module:{
    rules:[
      {
        loader: 'babel-loader',
        query:{
          presets:['react', 'es2015']
        },
        test: /\.jsx?$/,
        exclude:/(node_modules|bower_components)/
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
             loader: 'sass-loader',
             query: {
               includePaths: [path.resolve(__dirname, 'node_modules/foundation-sites/scss')]
             }
           }
        ],
      }
    ]
  },
  devtool: 'source-map'
};
