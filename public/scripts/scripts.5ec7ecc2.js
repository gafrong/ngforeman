"use strict";var app=angular.module("june28App",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]);app.config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).when("/list",{templateUrl:"views/list.html",controller:"ListCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("june28App").controller("MainCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("june28App").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]);