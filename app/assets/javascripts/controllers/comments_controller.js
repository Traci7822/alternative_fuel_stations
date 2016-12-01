stationApp.controller('CommentsController', ['$scope', '$stateParams', 'CommentFactory', function($scope, $stateParams, CommentFactory) {
  var ctrl = this;
  ctrl.id = $stateParams.id

  this.createComment = function() {
    ctrl.comment = {
      name: this.name,
      email: this.email,
      content: this.content
    }
    return CommentFactory.createComment(ctrl.comment, ctrl.id)
  }
}])
