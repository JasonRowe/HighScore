'use strict';

angular.module("highScoreServices", []).
factory("List", function() {
  var list = [];
  return {
      addItem: function (item) {
        list.push(item);
        return list.length - 1;
      }
  };
});
