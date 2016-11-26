angular
  .module('app', ['ui.router', 'templates', 'Devise'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'home/home.html',
        controller: 'HomeController as vm'
      })
      .state('stations', {
        url: '/stations',
        templateUrl: 'stations/stations.html',
        controller: 'StationController as vm',
      })
      .state('station.stationProfile', {
        url: 'stationProfile',
        templateUrl: 'station/station-profile.html',
        controller: 'StationProfileController as vm'
      })
      $urlRouterProvider.otherwise('/')
  })
