const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    baseUrl: "https://demoqa.com/automation-practice-form",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
