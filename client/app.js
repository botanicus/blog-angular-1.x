app = angular.module('app', ['ui.bootstrap', 'ngRoute', 'ngResource']);

// Router.
function router ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/', {templateUrl: 'templates/index.html', controller: 'IndexCtrl'}).
    when('/about', {templateUrl: 'templates/about.html', controller: 'AboutCtrl'});

  $locationProvider.html5Mode(true);
}

// Register the router.
app.config(['$routeProvider', '$locationProvider', router]);
