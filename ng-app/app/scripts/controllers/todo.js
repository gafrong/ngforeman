'use strict';

/**
 * @ngdoc function
 * @name june28App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the june28App
 */
angular.module('june28App')
  .controller('TodoCtrl', function ($scope) {
    $scope.todos = [
      {done: false, text: 'first'},
      {done: false, text: 'second'}
    ];

    $scope.addTodo = function() {
      var newTodo = {
        done: false,
        text: $scope.todoText
      };
      $scope.todos.push(newTodo);
      $scope.todoText = "";
    };

    $scope.removeTodo = function(start) {
      $scope.todos.splice(start, 1);
    };

    $scope.move = function(index, direction) {
      // handle moving up
      if (direction === 'up') {
        if (index === 0) {
          return;
        }
        index = index - 1;
      }
      // handle moving down
      if (direction === 'down'){
        if (index === $scope.todos.length - 1) {
          return;
        }
      }

      var todo = $scope.todos[index];

      $scope.todos.splice(index + 2, 0, todo);
      $scope.todos.splice(index, 1);
    };



  });