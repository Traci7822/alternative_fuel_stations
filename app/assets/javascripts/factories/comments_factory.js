stationApp.factory('CommentFactory', ['$http', function($http) {
    return {
      createComment: createComment
    }

    function createComment(comment) {
      var req = {
        method: 'POST',
        url: 'http://localhost:3000/comments',
        headers: {
          'Content-Type': undefined
        },
        data: {commment: 'comment'}
      }

      return $http(req)
        .then(function(data){
          console.log(data)
        })
        .catch(function(data) {
          console.log(data)
        })
      }  
}])
