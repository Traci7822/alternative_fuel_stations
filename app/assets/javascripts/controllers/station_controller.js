stationApp.controller('StationController', ['$scope', 'StationFactory', '$stateParams', function($scope, StationFactory, stateParams) {
  StationFactory
    .getStations()
    .then(function (res) {
      $scope.stationList = res.data;
    });

}]);
