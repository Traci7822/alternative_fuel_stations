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
    return $http.get('/users').then(handleSuccess, handleError('Error getting all users'));
  }
  function GetById(id) {
      return $http.get('/users/' + id).then(handleSuccess, handleError('Error getting user by id'));
  }
  function GetByUsername(username) {
      return $http.get('/users/' + username).then(handleSuccess, handleError('Error getting user by username'));
  }
  function Create(user) {
      return $http.post('/users', user).then(handleSuccess, handleError('Error creating user'));
  }
  function Update(user) {
      return $http.put('/users/' + user.id, user).then(handleSuccess, handleError('Error updating user'));
  }
  function Delete(id) {
      return $http.delete('/users/' + id).then(handleSuccess, handleError('Error deleting user'));
  }

  function handleSuccess(res) {
    return res.data
  }
  function handleError(error) {
    return function() {
      return { success: false, message: error};
    };
  }
}])
