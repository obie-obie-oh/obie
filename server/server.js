var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
require('dotenv').load();

var app = express();
app.set('port', (process.env.PORT || 6969));

var server = app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});

app.use(bodyParser.json());
app.use(cors());

require('./config/routes.js')(app, express);

module.exports = app;