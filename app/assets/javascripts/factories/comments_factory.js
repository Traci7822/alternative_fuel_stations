stationApp.factory('CommentFactory', ['$http', function($http) {

    return {
      createComment: createComment
    }

    function createComment(comment, station_id) {
      var req = {
        method: 'POST',
        url: 'http://localhost:3000/comments',
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          comment: comment,
          station_id: station_id
          }
      }

      return $http(req)
        .then(function(data){
          this.location.reload()
          console.log(data)
        })
        .catch(function(data) {
          console.log(data)
        })
      }
}])
