stationApp.controller('StationController', ['$scope', 'StationService', '$stateParams', function($scope, StationService, stateParams) {
  StationService
    .getStations()
    .then(function (res) {
      $scope.stationList = res.data;
    });

    var getStation = function() {
    }
}]);

stationApp.controller('StationProfileController', ['$scope', '$stateParams', function($scope, $stateParams) {
  debugger;
}]);

stationApp.controller('HomeController', function() {

});


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
