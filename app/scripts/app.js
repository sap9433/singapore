'use strict';

/**
 * @ngdoc overview
 * @name tripApp
 * @description
 * # tripApp
 *
 * Main module of the application.
 */
angular
  .module('tripApp', [
    'ngAnimate',
    'ngRoute',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
