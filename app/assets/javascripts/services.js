stationApp.service('StationService', ['$http', function($http) {
  this.getStations = function () {
    return $http.get('/stations.json')
  }
}])

// stationApp.service('SelectedStation', ['$stateParams', '$http', function($stateParams, $http) {
//   this.getStation = function($stateParams){
//     return $http.get('/stations/' + $stateParams.id + '.json')
//   }
// }])
