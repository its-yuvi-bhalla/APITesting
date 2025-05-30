  require('dotenv').config()
const { defineConfig } = require("cypress")

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    
    },
    env:{
        baseUrl:'https://reqres.in',
        apiKey: process.env.CYPRESS_API_KEY,
        user : {
          email: process.env.EMAIL,
          password: process.env.USER_PASSWORD
        },
        token:'QpwL5tke4Pnpja7X4'
    }  
  },
});
