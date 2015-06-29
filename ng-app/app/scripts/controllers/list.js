'use strict';

angular.module('june28App')
  .controller('ListCtrl', ['$http', '$scope', 'ListService', function ($http, $scope, ListService) {
    $scope.heading = 'List';
    $scope.lists = [];

    $scope.getList = function(){
      ListService.getListItems()
      .success(function (returnData){
        $scope.lists = returnData;
        console.log(returnData);
      }).error(function (data){
        console.log('error', data);
        return data;
      });
    };

    $scope.showTab = function(tabIndex) {
      $scope.currentTabIndex = tabIndex;
    };

    $scope.getList();
  }]);

