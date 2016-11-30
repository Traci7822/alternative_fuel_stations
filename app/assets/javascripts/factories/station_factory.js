stationApp.factory('StationService', ['$http', function($http) {
  return {
    getStations: getStations
  }
  
  function getStations() {
    return $http.get('/stations.json')
  }
}])
