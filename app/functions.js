if (typeof define !== 'function') {
  var define = require('amdefine')(module);
}

define(function() {
  return {
    argsAsArray: function(fn, arr) {
      return fn(arr[0], arr[1], arr[2]);
    },

    speak: function(fn, obj) {
      return fn.bind(obj)(obj);
    },

    functionFunction: function(str) {
      return str2 => str + ', ' + str2;
    },

    makeClosures: function(arr, fn) {
      return arr.map(x => () => fn(x));
    },

    partial: function(fn, str1, str2) {
      return str3 => fn(str1, str2, str3);
    },

    useArguments: function(...args) {
      return args.reduce((acc, x) => acc + x, 0);
    },

    callIt: function(fn, ...args) {
      fn.apply(null, args);
    },

    partialUsingArguments: function(fn, ...xs) {
      return (...ys) => fn.apply(null, [...xs, ...ys]);
    },

    curryIt: function(fn) {
      const byArity = {
        0: fn,
        1: x => fn(x),
        2: x => y => fn(x, y),
        3: x => y => z => fn(x, y, z)
      };
      return byArity[fn.length];
    }
  };
});
