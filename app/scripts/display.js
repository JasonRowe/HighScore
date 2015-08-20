'use strict';
angular.module('display', ['highScoreServices'])
  .controller('displayCtrl', ['$routeParams', '$scope', 'List', DisplayCtrl]);

function DisplayCtrl($routeParams, $scope, List) {
  $scope.listName = List.getItem($routeParams.listId);
}
