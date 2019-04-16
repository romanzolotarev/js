if (typeof define !== 'function') {
  var define = require('amdefine')(module);
}

define(function() {
  return {
    indexOf: function(arr, item) {
      return arr.indexOf(item);
    },

    sum: function(arr) {
      return arr.reduce((arr, x) => arr + x, 0);
    },

    remove: function(arr, item) {
      return arr.filter(x => item !== x);
    },

    removeWithoutCopy: function(arr, item) {
      let idx;
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
      return arr.filter(x => item === x).length;
    },

    duplicates: function(arr) {
      const counters = arr.reduce(
        (acc, x) => (acc[x] ? { ...acc, [x]: acc[x] + 1 } : { ...acc, [x]: 1 }),
        {}
      );

      return arr.reduce(
        (acc, x) =>
          counters[x] > 1 && acc.indexOf(x) === -1 ? acc.concat([x]) : acc,
        []
      );
    },

    square: function(arr) {
      return arr.map(x => x * x);
    },

    findAllOccurrences: function(arr, target) {
      return arr.reduce(
        (acc, x, idx) => (x === target ? acc.concat([idx]) : acc),
        []
      );
    }
  };
});
