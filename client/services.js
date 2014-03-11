var services = angular.module('services', ['ngResource']);

services.factory('Post', function ($resource) {
  return $resource('http://localhost:5000/posts/:slug.json');
});
