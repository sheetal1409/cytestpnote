const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    url: "https://master--jade-bubblegum-7b3c8f.netlify.app/"

  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/examples/*.js'
  },
});
