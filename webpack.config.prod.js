const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const plugins = [
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  }),
];

if (process.env.NODE_ENV === 'production') {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        screw_ie8: true,
        warnings: false,
      },
    })
  );
}

module.exports = {
  module: {
    name: 'client',
    entry: path.resolve(process.cwd(), 'src', 'index.js'),
    output: {
      path: path.resolve('./dist/'),
      filename: '[name].js',
    },
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: [
          'babel-preset-react',
          'babel-preset-es2015',
          'babel-preset-stage-0',
          'babel-preset-react-hmre',
        ].map(require.resolve),
        plugins: ['transform-runtime'],
      },
    }, {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: 'css-loader?sourceMap&-autoprefixer',
      }),
    }, {
      test: /\.(eot|svg|otf|ttf|woff|woff2)$/,
      use: 'file-loader',
    }],
  },
  output: {
    library: 'library-boilerplate',
    libraryTarget: 'umd',
  },
  plugins: plugins,
  resolve: {
    extensions: ['', '.js'],
  },
};
