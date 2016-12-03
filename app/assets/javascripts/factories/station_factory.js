stationApp.factory('StationFactory', ['$http', function($http) {
  return {
    getStations: getStations
  }

  function getStations() {
    return $http.get('/stations.json')
  }
}])
