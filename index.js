const webserver = require('webserver');
require('./log.js');

const app = require('./app.js');

var server = webserver(app);

module.exports = {
app: app,
server: server
};
