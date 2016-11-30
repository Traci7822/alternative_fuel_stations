stationApp.factory('SelectedStation', ['$stateParams', '$http', function($stateParams, $http) {
  return {
    getStation: getStation
  }
  function getStation($stateParams) {
    return $http.get('/stations/' + $stateParams.id + '.json')
  }
}])
