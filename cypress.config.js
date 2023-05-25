const { defineConfig } = require('cypress')

module.exports = defineConfig({
    defaultCommandTimeout: 20000,
    requestTimeout: 20000,
    responseTimeout: 20000,
    viewportWidth: 1500,
    viewportHeight: 1000,
    chromeWebSecurity: true,
    filterSpecs: true,
    reporter: 'cypress-mochawesome-reporter', //reporter Key
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here'
            require('cypress-mochawesome-reporter/plugin')(on) // reporter listner
        },
        specPattern: ['cypress/e2e/ebayTests.spec.js'],
    },
})
