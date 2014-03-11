var services = angular.module('services', ['ngResource']);

var apiServerPath = function (path) {
  if (window.location.host.match(/localhost/)) {
    return 'http://localhost:5000' + path;
  } else {
    return 'http://api.101ideas.cz' + path;
  }
}

services.factory('Post', function ($resource, $location) {
  return $resource(apiServerPath('/posts/:slug.json'));
});
