stationApp.service('StationService', ['$http', function($http) {
  this.getStations = function () {
    return $http.get('/stations.json')
  }
}])
