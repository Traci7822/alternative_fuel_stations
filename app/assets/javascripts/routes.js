stationApp.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'pages/home.html',
        controller: 'HomeController as vm'
      })
      .state('stations', {
        url: '/stations',
        templateUrl: 'pages/stations.html',
        controller: 'StationController as vm',
      })
      .state('station.stationProfile', {
        url: 'stationProfile',
        templateUrl: 'pages/station-profile.html',
        controller: 'StationProfileController as vm'
      })
      $urlRouterProvider.otherwise('/')
  });
