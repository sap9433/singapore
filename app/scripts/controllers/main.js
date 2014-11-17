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

    $('.been-there').click(function(event) {
      var parentDiv = $(event.target).parent('div');
      var image = parentDiv.find('img');
      $timeout(function() {
        image.hide();
        parentDiv.height(200);
        parentDiv.css('background', 'red');
      }, 500);
    });

  });
