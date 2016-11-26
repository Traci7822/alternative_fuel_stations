function StationService($http) {
  this.getStations = function () {
    return $http.get('/stations.json')
  }
}

angular
  .module('app')
  .service('StationService', StationService);
