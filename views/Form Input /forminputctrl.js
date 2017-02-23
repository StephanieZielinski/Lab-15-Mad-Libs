var app = angular.module('myModule');

app.controller('addWords', function($scope, myfactory, $location){

 $scope.grabName = function(text){
 counsole.log(text);

 $location.path('/formoutput');
  };
});
