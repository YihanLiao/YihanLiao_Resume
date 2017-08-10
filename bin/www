#!/usr/bin/nodejs
const debug = require('debug')('my-application');
const app = require('../app');
const path = require('path');

const config = require(path.resolve('config'));

app.set('port', process.env.PORT || config.port);

const server = app.listen(app.get('port'), function() {
  debug('Express server listening on port ' + server.address().port);
});
