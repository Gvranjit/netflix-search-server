const path = require("path");

module.exports = {
  target: "node",
  entry: "./build/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};
