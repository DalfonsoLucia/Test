const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '4ecrpc',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
