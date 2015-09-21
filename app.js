'use strict';

angular.module('myApp', [
    'ngRoute',
    'ngResource'
]).
config(['$routeProvider', '$locationProvider', '$httpProvider', function($routeProvider, $locationProvider, $httpProvider) {
    $routeProvider.
        when('/list', {
            templateUrl: 'partials/list.html',
            controller: 'JebiCtrl'
        }).
        when('/view/:storyID', {
            templateUrl: 'partials/view.html',
            controller: 'JebiCtrl'
        }).
        otherwise({redirectTo: '/list'});

}]);