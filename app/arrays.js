if (typeof define !== 'function') {
  var define = require('amdefine')(module);
}

define(function() {
  return {
    indexOf: function(arr, item) {
      return arr.indexOf(item);
    },

    sum: function(arr) {
      return arr.reduce(
        function(arr, x) { return arr + x; }, 0);
    },

    remove: function(arr, item) {
      return arr.filter(function(x) { return item !== x; });
    },

    removeWithoutCopy: function(arr, item) {
      var idx;
      while (true) {
        idx = arr.indexOf(item);
        if (idx === -1) break;
        arr.splice(idx, 1);
      }
      return arr;
    },

    append: function(arr, item) {
      return arr.concat(item);
    },

    truncate: function(arr) {
      arr.splice(arr.length - 1, 1);
      return arr;
    },

    prepend: function(arr, item) {
      return [item].concat(arr);
    },

    curtail: function(arr) {
      return arr.splice(1, arr.length - 1);
    },

    concat: function(arr1, arr2) {
      return arr1.concat(arr2);
    },

    insert: function(arr, item, index) {
      arr.splice(index, 0, item);
      return arr;
    },

    count: function(arr, item) {
      return arr.filter(
        function(x) { return item === x; }
      ).length;
    },

    duplicates: function(arr) {
      var counters = arr.reduce(
        function(acc, x) {
          var obj = {};
          obj[x] = acc[x] ? acc[x] + 1 : 1;
          return Object.assign(acc, obj);
        }, {});

      return arr.reduce(
        function(acc, x) {
          return (
            counters[x] > 1 && acc.indexOf(x) === -1 ? acc.concat([x])
              : acc
          );
        }, []);
    },

    square: function(arr) {
      return arr.map(function(x) { return x * x; });
    },

    findAllOccurrences: function(arr, target) {
      return arr.reduce(
        function(acc, x, idx) {
          return x === target ? acc.concat([idx]) : acc;
        }, []);
    }
  };
});
