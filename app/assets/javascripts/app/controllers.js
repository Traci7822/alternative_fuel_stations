stationApp.controller('StationController', ['$scope', 'StationService', function($scope, StationService) {
  StationService
    .getStations()
    .then(function (res) {
      $scope.stationList = res.data;
    });
}]);
