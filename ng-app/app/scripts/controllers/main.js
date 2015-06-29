'use strict';

/**
 * @ngdoc function
 * @name june28App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the june28App
 */
angular.module('june28App')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.boxSection = [
      {name: 'section 1', imgUrl: ''},
      {name: 'section 2', imgUrl: ''},
      {name: 'section 3', imgUrl: ''},
      {name: 'section 4', imgUrl: ''}
    ];
  });
