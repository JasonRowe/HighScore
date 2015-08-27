'use strict';
angular.module('display', ['highScoreServices'])
  .controller('displayCtrl', ['$routeParams', '$scope', 'List', DisplayCtrl]);

function DisplayCtrl($routeParams, $scope, List) {
  var listDetails = List.getItem($routeParams.listId);

  if(listDetails) {
    $scope.Name = listDetails.Name;
    $scope.Description = listDetails.Description;
  }
  else {
    window.location.href = '#/404';
  }
}
