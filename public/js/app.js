angular.module('AspenApp', ['ui.router'])

.config(function ($urlRouterProvider, $stateProvider, $locationProvider) {

  $urlRouterProvider.otherwise('/');

   $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'features/listings/listingsView.html',
      caseInsenstive: true,
      controller: 'listingCtrl'
    })

  $locationProvider.html5Mode(true);
});
