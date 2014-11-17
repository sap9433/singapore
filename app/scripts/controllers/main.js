'use strict';

/**
 * @ngdoc function
 * @name tripApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tripApp
 */
angular.module('tripApp')
  .controller('MainCtrl', function($scope, $timeout) {
    $timeout(function() {
      AniJS.init();
      AniJS.run();
    }, 100);

  });
