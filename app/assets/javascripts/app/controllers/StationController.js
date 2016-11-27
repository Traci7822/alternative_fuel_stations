function StationController($scope, StationService){
  debugger;
  StationService
    .getStations()
    .then(function (res) {
      console.log(res)
      $scope.stationList = res.data;
    })
}

angular
  .module('app')
  .controller('StationController', StationController);
