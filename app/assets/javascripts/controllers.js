stationApp.controller('StationController', ['$scope', 'StationService', '$stateParams', function($scope, StationService, stateParams) {
  StationService
    .getStations()
    .then(function (res) {
      $scope.stationList = res.data;
    });

}]);

stationApp.controller('StationProfileController', ['$scope', '$stateParams', 'SelectedStation', function($scope, $stateParams, SelectedStation) {
  SelectedStation
    .getStation($stateParams)
    .then(function (res) {
      $scope.station = res.data;
      debugger;
    });

}]);

stationApp.controller('HomeController', function() {

});

stationApp.controller('RatingController', ['$scope', function($scope) {
  $scope.rating = 0;
  $scope.ratings = [{
    current: 0, //change to be the average of all ratings for station
    max: 5
  }];
}]);

stationApp.controller('NavigationController', ['$scope', 'Auth', function($scope, Auth){
  $scope.signedIn = Auth.isAuthenticated;
  $scope.logout = Auth.logout;

  Auth.currentUser().then(function (user) {
    $scope.user = user;
  });

  $scope.$on('devise:new-registration', function (e, user) {
    $scope.user = user;
  });
  $scope.$on('devise:login', function (e, user) {
    $scope.user = user;
  });
  $scope.$on('devise:logout', function (e, user) {
    $scope.user = {};
  });

}])

stationApp.controller('AuthorizationController', ['$scope', '$state', 'Auth', function($scope, $state, Auth) {
  var config = {
    headers: {
      'X-HTTP-Method-Override': 'POST'
    }
  };

  $scope.login = function() {
    Auth.login($scope.user).then(function(){
      debugger;
      $state.go('home');
    });
  };
  $scope.register = function() {
    var credentials = {
      email: $scope.user.email,
      password: $scope.user.password,
      password_confirmation: $scope.user.password
    };
    debugger;

    Auth.register(credentials, config).then(function(registeredUser) {
      console.log(registeredUser);
      $state.go('stations');
    }, function(error) {
      console.log(error)
    });
      //
    // });
  };
}])




// function getClub(id) {
//      return $http.get('clubs/' + $stateParams.id)
//        .then(handleResponse)
//        .catch(handleError);
//    }
// activate();
//
//    function activate() {
//        getClub();
//      }
//
// [3:15]
// function getClub() {
//      return ClubFactory.getClub($stateParams.id)
//        .then(setClub)
//    }
//
//    function setClub(data) {
//       ctrl.club = data;
//    }

// ctrl.createClub = createClub;
//
//    function createClub() {
//      return ClubFactory.createClub(ctrl.newClub)
//        .then(function() {
//          $state.go('home.clubs')
//        })
//    }
