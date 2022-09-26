const cfg = require('../jest.config.js');
module.exports = {
    ...cfg,
    reporters: ['jest-sonar']
};
