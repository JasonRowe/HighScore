angular.module('admin', [])
  .controller('modifyCtrl', ModifyCtrl)
  .controller('createCtrl', ['$scope', CreateCtrl]);

function CreateCtrl($scope) {
  $scope.list = [];
      $scope.listName = 'My List Name';
      $scope.submit = function() {
        if ($scope.listName) {
          $scope.list.push(this.listName);
          $scope.listName = '';
        }
      };
}

function ModifyCtrl() {
}
