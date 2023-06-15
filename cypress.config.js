const { defineConfig } = require("cypress");
//Global changes
module.exports = defineConfig({
  projectId: 't8afx6',

  defaultCommandTimeout: 6000,
  //changed timeout from 4s to now 6s to complete each step before timing out
  env: {
    url: "https://rahulshettyacademy.com/"  
  },
  retries: {
    runMode: 1,
    openMode: 0,
    },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/examples/*.js',
    screenshotsFolder: 'cypress/screenshots',
  },
});
