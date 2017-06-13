const path = require('path');

module.exports = {
  entry: "./frontend/todo_redux.jsx",
  output: {
    path: path.resolve(__dirname,"./TodoApp/app/assets/javascripts"),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules)/,
        loader: "babel-loader",
        query: {
          presets: ["es2015", "react"]
        }
      }
    ]
  },
  devtool: "source-maps",
  resolve: {
    extensions: [".jsx",".js",".*"]
  }
};
