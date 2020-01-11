const { setWorldConstructor, Given, Then } = require('cucumber');
const { VerifyEmailListUseCase } = require('../../../Release/Application/verify-email-list.use-case');

const expect = require('expect');
const World = require('../../world');

setWorldConstructor(World);

Given("a list of 2 email addresses", 
  async function(emailAddresses) { });

Then("{string} is valid", async function(validEmail) {
  const result = await this.client.exists(validEmail);
  expect(result.Value.exists).toBe(true);
});

Then("{string} is invalid", async function(invalidEmail) {
  const result = await this.client.exists(invalidEmail);
  expect(result.Value.exists).toBe(false);
});
