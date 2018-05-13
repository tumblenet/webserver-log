const webserver = require('webserver');
require('./log.js');

const app = require('./app.js');

if (global.tnserver) {
  module.exports = app;
} else {
  var server = webserver(app);

  module.exports = server;
}
