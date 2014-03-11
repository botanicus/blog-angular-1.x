#!/usr/bin/env node

/**
 * Module dependencies.
 */

var express = require('express');
var cors = require('cors');
var post = require('./routes/post');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();

// All environments.
app.set('port', process.env.PORT || 5000);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(cors());
app.use(app.router);

// Development.
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Routes.
app.get('/posts.json', post.list);
app.get('/posts/:slug.json', post.get);
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
