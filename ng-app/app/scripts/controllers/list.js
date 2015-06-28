'use strict';

angular.module('june28App')
  .controller('ListCtrl', function ($scope, $routeParams) {
    $scope.items = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.showTab = function(tabIndex) {
      $scope.currentTabIndex = tabIndex;
    }
  });

