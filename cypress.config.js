const { defineConfig } = require('cypress');
const { faker } = require('@faker-js/faker');
module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.demoblaze.com',
    setupNodeEvents(on, config) {
      on('task', {
        generateUser() {
          const randomNumber = Math.ceil(Math.random(1000) * 1000);
          return {
            username: faker.name.firstName() + `${randomNumber}`,
            email: 'test' + `${randomNumber}` + '@mail.com',
            password: 'Password12345!'
          };
        }
      });

      on('task', {
        generatePlaceOrderInfo() {
          const generateYear = Math.floor(Math.random() * 44) + 1980;
          return {
            name: faker.person.firstName(),
            country: faker.location.country(),
            city: faker.location.city(),
            creditCard: faker.finance.creditCardNumber(),
            month: faker.date.month(),
            year: generateYear
          };
        }
      });
    }
  }
});
