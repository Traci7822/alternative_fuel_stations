stationApp.factory('CommentFactory', ['$http', function($http) {

    return {
      createComment: createComment
    }

    function createComment(comment, station_id) {
      debugger;
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
          debugger;
          console.log(data)
        })
        .catch(function(data) {
          debugger;
          console.log(data)
        })
      }
}])
