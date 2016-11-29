stationApp.service('StationService', ['$http', function($http) {
  this.getStations = function () {
    return $http.get('/stations.json')
  }
}])

stationApp.service('SelectedStation', ['$stateParams', '$http', function($stateParams, $http) {
  this.getStation = function($stateParams){
    return $http.get('/stations/' + $stateParams.id + '.json')
  }
}])

stationApp.service('UserService', ['$http', function($http) {
  var service = {};

  service.GetAll = GetAll;
  service.GetById = GetById;
  service.GetByUsername = GetByUsername;
  service.Create = Create;
  service.Update = Update;
  service.Delete = Delete;

  return service;

  function GetAll() {
    
  }
}])
