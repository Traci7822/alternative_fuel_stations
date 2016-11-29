stationApp.config(function($stateProvider, $urlRouterProvider, AuthProvider) {

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
      .state('login', {
        url: '/login',
        templateUrl: 'pages/authorization/login.html',
        controller: 'AuthorizationController',
      })
      .state('register', {
        url: '/register',
        templateUrl: 'pages/authorization/_register.html',
        controller: 'AuthorizationController',
      })
      // .state('station.ratings', {
      //   url: "",
      //   templateUrl: 'pages/stations/ratings.html',
      //   controller: 'RatingController as vm',
      //   transclude: true
      // })
      $urlRouterProvider.otherwise('/')
  });
