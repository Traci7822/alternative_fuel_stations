stationApp.controller('StationController', ['$scope', 'StationFactory', '$stateParams', function($scope, StationService, stateParams) {
  var ctrl = this;
  $scope.filteredStations = [];
  $scope.currentPage = 1;
  $scope.numPerPage = 10;
  $scope.maxSize = 5;
  $scope.stations = null;

  $scope.getStations = function() {
    $scope.stationList = StationService.getStations().then(function (res) {
      $scope.filterStations(res.data);
    });
  }

  $scope.filterStations = function(stations) {
    $scope.stations = stations;
    $scope.$watch('currentPage + numPerPage', function() {
      var begin = (($scope.currentPage - 1) * $scope.numPerPage);
      var end = begin + $scope.numPerPage;
      $scope.filteredStations = $scope.stations.slice(begin, end);
    })
  }

  $scope.getStations();
  debugger;
  //how do i get $scope.stations available?
}]);
