stationApp.controller('StationProfileController', ['$scope', '$stateParams', 'SelectedStation', function($scope, $stateParams, SelectedStation) {
  SelectedStation
    .getStation($stateParams)
    .then(function (res) {
      $scope.station = res.data;
    });

}]);
