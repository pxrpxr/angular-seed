	
'use strict';
 
angular.module('myApp.home', ['ngRoute', 'firebase'])
 
// Declared route 
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'home/home.html',
        controller: 'HomeCtrl'
    });
}])
 
// Home controller
//.controller('HomeCtrl', [function() {
.controller('HomeCtrl', ['$scope','$firebaseSimpleLogin',function($scope,$firebaseSimpleLogin) {
  var firebaseObj = new Firebase("https://brilliant-heat-5582.firebaseio.com/"); 
  var loginObj    = $firebaseSimpleLogin(firebaseObj);

  
  $scope.SignIn = function(event) {
    event.preventDefault();  // To prevent form refresh
    var username = $scope.user.email;
    var password = $scope.user.password;
    console.log(username);
    console.log(password);
    loginObj.$login('password', {
            email: username,
            password: password
        })
        .then(function(user) {
            // Success callback
            console.log('Authentication successful');
        }, function(error) {
            // Failure callback
            console.log('Authentication failure');
        });
    }
}]);