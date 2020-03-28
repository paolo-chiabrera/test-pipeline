const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './tests/*.test.js',
  output: './tests/output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost',
      show: false
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'client',
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}