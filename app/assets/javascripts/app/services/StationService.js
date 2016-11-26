function StationService($http) {
  this.getStations = function () {
    debugger;
    return $http.get('/stations.json')
  }
}

angular
  .module('app')
  .service('StationService', StationService);
