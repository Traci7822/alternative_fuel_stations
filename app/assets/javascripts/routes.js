stationApp.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'pages/home.html',
        controller: 'HomeController as vm'
      })
      .state('stations', {
        url: '/stations',
        templateUrl: 'pages/stations/stations.html',
        controller: 'StationController as vm',
      })
      .state('station', {
        url: '/:id',
        templateUrl: 'pages/stations/station-profile.html',
        controller: 'StationProfileController as vm',
      })
      .state('station.hours', {
        url: '/hours',
        templateUrl: 'pages/stations/station/hours.html',
        controller: 'StationProfileController as vm'
      })
      .state('station.contact', {
        url: '/contact',
        templateUrl: 'pages/stations/station/contact.html'
      })
      // .state('station.ratings', {
      //   url: "",
      //   templateUrl: 'pages/stations/ratings.html',
      //   controller: 'RatingController as vm',
      //   transclude: true
      // })
      $urlRouterProvider.otherwise('/')
  });
