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
        url: '/:name',
        templateUrl: 'pages/stations/station-profile.html',
        controller: 'StationProfileController as vm',
      })
      $urlRouterProvider.otherwise('/')
  });
