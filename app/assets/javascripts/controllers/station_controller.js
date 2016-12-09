stationApp.controller('StationController', ['$scope', 'StationFactory', '$stateParams', function($scope, StationFactory, stateParams) {
  $scope.sortType = 'name';
  $scope.sortReverse = false;

  StationFactory
    .getStations()
    .then(function (res) {
      $scope.stationList = res.data;
      
    });

}]);
