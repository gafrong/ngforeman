'use strict';

angular.module('june28App')
  .controller('ListCtrl', ['$http', '$scope', function ($http, $scope) {
    $scope.heading = 'List';
    $scope.lists = [];
    var getLists = function(){
      $http.get('/test/api/list.json')
      .success(function(data){
        console.log(data);
        $scope.lists = data;
      })
      .error(function(data){
        console.log('error', data);
        return data;
      });
    };

    $scope.items = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.showTab = function(tabIndex) {
      $scope.currentTabIndex = tabIndex;
    };

    getLists();
  }]);

