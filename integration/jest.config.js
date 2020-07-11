module.exports = {
  preset: "./preset.js",
  testRegex: "./*\\.test\\.tsx$",
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  moduleDirectories: ["node_modules", "src/"],
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    ".+\\.(css|styl|svg|less|sass|scss|png|jpg|ttf|woff|woff2)$":
      "jest-transform-stub",
  },
};
