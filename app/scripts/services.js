'use strict';

angular.module('highScoreServices', []).
factory('List', function() {
  var list = [];
  
  var addItemLogic = function (item) {
    list.push(item);
    return list.length - 1;
  };

  var getItemLogic = function (id) {
    return list[id];
  };

  return {
      addItem: addItemLogic,
      getItem: getItemLogic
  };
});
