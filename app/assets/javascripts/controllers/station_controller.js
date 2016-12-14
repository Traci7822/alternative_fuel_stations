stationApp.controller('StationController', ['$scope', 'StationFactory', '$stateParams', function($scope, StationFactory, stateParams) {
  $scope.sortType = 'name';
  $scope.sortReverse = false;

  StationFactory
    .getStations()
    .then(function (res) {
      $scope.stationList = res.data;
      for (var i = 0; i < $scope.stationList.length; i++) {
        $scope.station = $scope.stationList[i];
        $scope.station.counter = 0;
      }
    });

    $scope.updateCounter = function() {
      this.station.counter += 1;
    };

}]);
