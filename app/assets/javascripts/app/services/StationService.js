function StationService($http){
  this.getStations = function () {
    return $http.get('https://data.colorado.gov/resource/c7ve-fkni.json');
  }
}

angular
  .module('app')
  .service('StationService', StationService);
