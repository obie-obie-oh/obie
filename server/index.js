const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').load();

const app = express();
app.set('port', (process.env.PORT || 6969));

app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));

const server = app.listen(app.get('port'), () => {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});

require('./config/routes.js')(app, express);

module.exports = app;