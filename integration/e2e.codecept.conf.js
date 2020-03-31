const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS);

const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || `localhost:${PORT}`;

exports.config = {
  tests: './e2e/*.test.js',
  output: './e2e/output',
  helpers: {
    Puppeteer: {
      url: `http://${HOST}`,
      show: false,
    },
  },
  bootstrap: null,
  mocha: {},
  plugins: {
    retryFailedStep: {
      enabled: true,
    },
    screenshotOnFail: {
      enabled: true,
    },
  },
};
