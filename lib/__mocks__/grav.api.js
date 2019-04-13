const fake = require('../../spec/fake');
const api = {};

api.get = () => {
  return Promise.resolve(true);
}

api.post = () => Promise.resolve(fake.imageUrl);

api.saveUrl = () => Promise.resolve({ imageName: fake.imageName })

module.exports = api;