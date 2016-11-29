// move controllers to their own files

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

stationApp.controller('UserController', ['$location', 'AuthenticationService', function($location, AuthenticationService) {

}])

stationApp.controller('LoginController', ['$location', 'AuthenticationService', 'FlashService', function($location, AuthenticationService, FlashService) {
  var vm = this;
  vm.login = login;
  AuthenticationService.ClearCredentials();

  function login() {
    vm.dataLoading = true;
    AuthenticationService.Login(vm.username, vm.password, function(response) {
      if (response.sucess) {
        AuthenticationService.SetCredentials(vm.username, vm.password);
        $location.path('/');
        // maybe change this to user page
      } else {
        FlashService.Error(response.message);
        vm.dataLoading = false;
      }
    });
  }
}])

stationApp.controller('RegisterController', ['UserService', '$location', '$rootScope', 'FlashService', function(UserService, $location, $rootScope, FlashService) {
  var vm = this;

        vm.register = register;

        function register() {
            vm.dataLoading = true;
            UserService.Create(vm.user)
                .then(function (response) {
                    if (response.success) {
                        FlashService.Success('Registration successful', true);
                        $location.path('/login');
                    } else {
                        FlashService.Error(response.message);
                        vm.dataLoading = false;
                    }
                });
        }
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
