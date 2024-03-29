// Partial controllers.
app.controller('LayoutCtrl', function ($scope, $location) {
  // So we can hide link to the currently selected page.
  $scope.isSelected = function (path) {
    return path === $location.path();
  }
});

// Full page controllers.
app.controller('AboutCtrl', function ($scope) {
  // TODO
});

app.controller('IndexCtrl', function ($scope, Post) {
  $scope.posts = Post.query();
});

app.controller('TagCtrl', function ($scope, Post, $routeParams) {
  $scope.posts = Post.query({tag: $routeParams.tag});
});

app.controller('PostCtrl', function ($scope, $routeParams, Post) {
  $scope.post = Post.get({slug: $routeParams.slug});
});

app.controller('LoginCtrl', function ($scope, $rootScope, $modal, $http) {
  $rootScope.user = {};

  $scope.setPassword = function ($event) {
    console.log("Password was set to " + $rootScope.user.password);

    var response = $scope.authenticate();
    response.
      success(function (data) {
        console.log("Authenticated.")
        $rootScope.authenticated = true; // Use this only to show/hide the log in link, it's not safe!
        $scope.closeLoginBox();
      }).
      error(function (error) {
        console.log("NOT authenticated!");
        $rootScope.authenticated = false;
        $rootScope.user = {}; // Reset the form.
      })
    ;
  }

  $scope.authenticate = function () {
    // TODO: Make it a service.
    return $http.post('http://localhost:5000/login', $rootScope.user);
  }

  $scope.showLoginBox = function () {
    $scope.loginModalBox = $modal.open({
      templateUrl: 'templates/login.html',
      windowClass: 'show',
      scope: $scope // Inherit the scope.
      // If we don't do this, a new scope is inheritted
      // from root scope and hence we can't access loginModalBox.
    });
  }

  $scope.closeLoginBox = function () {
    $scope.loginModalBox.close();
  }
});
