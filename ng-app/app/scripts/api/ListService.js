'use strict';

angular.module('june28App')
  .factory('ListService', ['$http', function($http){
    var endpoint = {
      GetListItems:'/api/v1/list.json',
      PostListItem: '/api/v1/'
    };
    return {
      getListItems: function (returnData) {
        returnData = returnData || {};
        returnData.take = returnData.take || 10;
        returnData.skip = returnData.skip || 0;
        return $http.get(endpoint.GetListItems);
      },
      postListItem: function(name, category, price){
        return $http.post(endpoint.PostListItem, {
          Name: name, 
          Category: category, 
          Price: price
        });
      }
    };
  }]);