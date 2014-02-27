// Partial controllers.
app.controller('FooterCtrl', ['$scope', '$location',
  function ($scope, $location) {
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

app.controller('IndexCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('/posts.json?count=5').success(function (data) {
      $scope.posts = data;
    });
  }
]);
