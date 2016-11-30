stationApp.controller('CommentsController', ['CommentFactory', function(CommentFactory) {
  var ctrl = this;

  this.createComment = function() {
    ctrl.comment = {
      name: this.name,
      email: this.email,
      content: this.content
    }
     return CommentFactory.createComment(ctrl.comment)
       .then(showComment)

     }
}])
 stationApp.controller('FormController', function() {
   debugger;
 })
