const rimraf = require("rimraf");

console.log("Post-build");

//Remove copied files in build folder that was copied by the CopyWebpackPlugin.
var filesToDelete = [
  "*.png",
  "*.txt",
  "precache*",
  "service-worker.js",
  "*.ico",
  "main",
];

filesToDelete.forEach((e) => {
  rimraf("./build/" + e, function () {
    /* do nothing */
  });
});

//TODO: Rename index.html to popup.html
