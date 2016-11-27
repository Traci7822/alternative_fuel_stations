stationApp.directive('showStations', function() {
  return {
    restrict: 'E',
    templateUrl: 'pages/stations-table.html',
    scope: {
      stationList: '='
    }
  }
})
