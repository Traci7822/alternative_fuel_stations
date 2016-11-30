stationApp.controller('CommentsController', ['$scope', 'comments', function($scope, comments) {
  $scope.comments = comments.comments;
  $scope.newComment = function() {
    var comment = this.vm.comment;
    if(!comment.name || comment.name === '' || !comment.email || comment.email === '' || !comment.content || comment.content === '') {return;}
    $scope.comments.push({name: comment.name, email: comment.email, content: comment.content});
    debugger;
  }
}])
