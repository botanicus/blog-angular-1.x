#!/usr/bin/env node

/**
 * Module dependencies.
 */

var express = require('express');
var cors = require('cors');
var post = require('./routes/post');
var user = require('./routes/user');
var login = require('./routes/login').login;
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

// var passport = require('passport');
// var LocalStrategy = require('passport-local').Strategy;

// passport.use(new LocalStrategy(
//   function(username, password, done) {
//     console.log([username, username])
//     console.log([password, password])
//     console.log([done])
//     if (username === 'botanicus' && password === 'password') {
//       return done(null, {username: 'botanicus'});
//     } else {
//       return done(null, false);
//     }
//   }
// ));

// Routes.
app.get('/posts.json', post.list);
app.get('/posts/:slug.json', post.get);
app.get('/users', user.list);

// app.post('/login', passport.authenticate('local'), login);
app.post('/login', login);

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
