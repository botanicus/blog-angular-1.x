app = angular.module('app', ['ui.bootstrap', 'ngRoute', 'services']);

// Router.
function router ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/', {templateUrl: 'templates/index.html', controller: 'IndexCtrl'}).
    when('/about', {templateUrl: 'templates/about.html', controller: 'AboutCtrl'}).
    // when('/posts/:slug', {controller: 'PostCtrl'});
    when('/posts/:slug', {templateUrl: 'templates/post.html', controller: 'PostCtrl'});

  /*
    How routing in AngularJS works:

    Either you go for the traditional routing,
    then the URLs looks like /#/example/ask/123.
    From the server perspective this is just /.
    Router: when('/example/ask/:invitationId').

    If you need more routes which server recognise,
    you can use /example/ask#/123. Server will see
    it as /example/ask and AngularJS will just see
    :invitationId.
    Router: when('/:invitationId').

    Hence, I think, you can use /example/ask/123#
    and in AngularJS just route to '/' within this
    app.

    ... the other option is to go for HTML5 routing.
    For that, it's important to add <base href="/" />
    to the template. At least in this case I needed it.

    There are two good things about HTML5 routing:

    The URLs are "correct", no #h@cks#.

    And more importantly what you see and route against
    on the server is what you see and route against in AngularJS.

    So in Sinatra you have get '/example/ask/:collaborator_id'
    to render the proper template and then in Angular you do
    when('/example/ask/:collaboratorId').
  */

  $locationProvider.html5Mode(true);
}

// Register the router.
app.config(['$routeProvider', '$locationProvider', router]);
