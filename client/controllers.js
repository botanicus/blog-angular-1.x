// Partial controllers.
app.controller('LayoutCtrl', ['$scope', '$location',
  function ($scope, $location) {
    // So we can hide link to the currently selected page.
    $scope.isSelected = function (path) {
      return path === $location.path();
    }
  }
]);

// Full page controllers.
app.controller('AboutCtrl', ['$scope',
  function ($scope) {
  }
]);

app.controller('IndexCtrl', ['$scope', 'Post',
  function ($scope, Post) {
    $scope.posts = Post.query();
  }
]);

app.controller('PostCtrl', ['$scope', '$routeParams', 'Post',
  function ($scope, $routeParams, Post) {
    $scope.post = Post.get({slug: $routeParams.slug});
  }
]);
