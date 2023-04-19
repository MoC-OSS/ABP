const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  restartBrowserBetweenSpecFiles: true,
  // Test runner resolution of screen
  viewportWidth: 1366,
  viewportHeight: 768,
  // Number of retries if test failed
  retries: {
    runMode: 2,
    openMode: 1,
  },
  // Video report
  video: false,
  // Explicit timeout for elements or actions etc.
  defaultCommandTimeout: 15000,
  // Explicit timeout for response of request
  responseTimeout: 60000,
  // Explicit timeout for page load
  pageLoadTimeout: 60000,
  experimentalStudio: true,
  redirectionLimit: 35,
  // Main folder that contains tests
  integrationFolder: 'cypress/e2e',
  // Tests file
  testFiles: '**/*.js',
  e2e: {
    env: {
      allureResultsPath: "allure-results",
    },
  },
})
