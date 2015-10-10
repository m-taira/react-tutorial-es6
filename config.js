module.exports = {
  js: {
    src: './src/js/**',
    dest: './build/js',  },

  webpack: {
    entry: './src/js/app.es6',
    output: {
      filename: 'bundle.js'
    },

    resolve: {
      extensions: ['', '.js', '.es6', '.jade']
    },

    devtool: 'inline-source-map',

    module: {
      loaders: [
        { test: /\.es6$/, loader: 'babel-loader' },
        { test: /\.jade/, loader: 'react-jade-loader'}
      ]
    }
  }
}