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

          var listDetails = {
            'Name': this.name,
            'Description': this.description
          };

          var id = List.addItem(listDetails);
          window.location.href = '#/display/' + id;
        }
      };
}

function ModifyCtrl() {
}
