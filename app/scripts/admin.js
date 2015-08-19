/*jslint browser: true*/
/*global window: false */

'use strict';
angular.module('admin', [])
  .controller('modifyCtrl', ModifyCtrl)
  .controller('createCtrl', ['$scope', 'List', CreateCtrl]);

function CreateCtrl($scope, List) {
    $scope.listName = 'My List Name';
    $scope.submit = function() {
      if ($scope.listName) {
          var id = List.addItem(this.listName);
          window.location.href = '#/display/' + id;
        }
      };
}

function ModifyCtrl() {
}
