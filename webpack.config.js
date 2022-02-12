var webpack = require('webpack');
var path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports ={
  entry: [
    "script-loader!jquery/dist/jquery.min.js",
    "script-loader!foundation-sites/dist/js/foundation.min.js",
    "./app/app.tsx"
  ],
  externals: {
    jquery: 'jQuery',
    foundationSites: 'foundation-sites'
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
      applicationStyles: 'app/styles/style.scss',
      actions: 'app/actions/actions.tsx',
      reducers: 'app/reducers/reducers.tsx',
      configureStore: 'app/store/configureStore.tsx'
    },
    extensions: ['.ts', '.tsx', '.jsx', '.react.js', '.*','.js']
  },
  module:{
    rules:[
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
      /*{
        loader: 'babel-loader',
        query:{
          presets:['react', 'es2015']
        },
        test: /\.jsx?$/,
        exclude:/(node_modules|bower_components)/
      },*/
      {
        test: /.(?:sass|scss)$/,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          "css-loader",
          {
            // Compiles Sass to CSS
             loader: 'sass-loader',
             query: {
               includePaths: [path.resolve(__dirname, 'node_modules')]
             }
           }
        ],
      }
    ]
  },
  devtool: 'source-map',
  mode: 'development'
};
