const path = require("path");

//Change this to the extension path
const extensionPath = path.resolve(__dirname, "./build");

let jest_puppeteer_conf = {
  launch: {
    timeout: 30000,
    //dumpio: true, // Whether to pipe the browser process stdout and stderr
    defaultViewport: null,
    headless: false, // required for loading extensions -- extensions can't be loaded in headless
    args: [
      "--ignore-default-args=true" /* Removes the default '--disable-extensions' */,
      `--disable-extensions-except=${extensionPath}`,
      `--load-extension=${extensionPath}`,
    ],
  },
};

const isDebugMode = false;

if (isDebugMode) {
  jest_puppeteer_conf.launch.headless = false; // for debug:  to see what the browser is displaying
  jest_puppeteer_conf.launch.slowMo = 250; // slow down by 250ms for each step
  jest_puppeteer_conf.launch.devtools = true; // This lets you debug code in the application code browser
  jest_puppeteer_conf.launch.args = ["--start-maximized"]; // maximise the screen
}

module.exports = jest_puppeteer_conf;
