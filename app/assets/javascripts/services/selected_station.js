stationApp.service('SelectedStation', ['$stateParams', '$http', function($stateParams, $http) {
  this.getStation = function($stateParams){
    return $http.get('/stations/' + $stateParams.id + '.json')
  }
}])

// change to factory
