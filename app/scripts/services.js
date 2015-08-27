'use strict';

angular.module('highScoreServices', []).
factory('List', function() {
  var list = [];

  var addItemLogic = function (item) {
    // TODO send request to save item
    list.push(item);
    return list.length - 1;
  };

  var getItemLogic = function (id) {
    // TODO send request to retrieve item from backend
    return list[id];
  };

  return {
      addItem: addItemLogic,
      getItem: getItemLogic
  };
});
