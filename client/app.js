var app = angular.module('app', ['ui.bootstrap', 'ngRoute']);

function router ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/', {templateUrl: 'templates/index.html'}).
    when('/about', {templateUrl: 'templates/about.html'});

  $locationProvider.html5Mode(true);
}

app.config(['$routeProvider', '$locationProvider', router]);
