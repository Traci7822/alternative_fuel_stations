stationApp.controller('StationProfileController', ['$scope', '$stateParams', 'SelectedStation', 'CommentFactory', function($scope, $stateParams, SelectedStation, CommentFactory) {
  var ctrl = this;
  ctrl.id = $stateParams.id;

  SelectedStation
    .getStation($stateParams)
    .then(function (res) {
      $scope.station = res.data;
    });

    this.createComment = function() {
      var comment = {
        name: form.name.value,
        email: form.email.value,
        content: form.content.value
      }
      $scope.station.comments.push(comment)
      return CommentFactory.createComment(comment, ctrl.id)
    }


}]);
