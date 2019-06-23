const argv = require('./argv');

module.exports = parseInt(
  '3002' || argv.port || process.env.PORT || '3000',
  10,
);
