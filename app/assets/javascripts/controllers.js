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
    current: 1,
    max: 5
  }];

  $scope.getSelectedRating = function(rating) {
    console.log(rating);
  }
}]);




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
