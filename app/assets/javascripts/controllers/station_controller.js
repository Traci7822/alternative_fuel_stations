stationApp.controller('StationController', ['$scope', 'StationService', '$stateParams', function($scope, StationService, stateParams) {
  $scope.sortType = 'name';
  $scope.sortReverse = false;
  $scope.searchStations = '';

  StationService
    .getStations()
    .then(function (res) {
      $scope.stationList = res.data;
    });

}]);
