const argv = require('./argv');

module.exports = parseInt(
  '3000' || argv.port || process.env.PORT || '3000',
  10,
);
