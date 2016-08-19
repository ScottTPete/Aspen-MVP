var express = require('express'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  morgan = require('morgan');

module.exports = function () {

  var app = express();

  app.use(morgan('dev'));
  app.use(bodyParser.json({
    limit: '50mb'
  }));
  app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: true
  }));

  app.use(cors());

  app.use(express.static('../public'));

  return app;

};
