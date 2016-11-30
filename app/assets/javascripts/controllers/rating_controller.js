stationApp.controller('RatingController', ['$scope', function($scope) {
  $scope.rating = 0;
  $scope.ratings = [{
    current: 0, //change to be the average of all ratings for station
    max: 5
  }];
}]);
