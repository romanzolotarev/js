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
      return function(str2) { return str + ', ' + str2; };
    },

    makeClosures: function(arr, fn) {
      return arr.map(function(x) {
        return function() {
          return fn(x);
        };
      }
      );
    },

    partial: function(fn, str1, str2) {
      return function(str3) {
        return fn(str1, str2, str3);
      };
    },

    useArguments: function() {
      var args = Array.prototype.slice.call(arguments);
      return args.reduce(
        function(acc, x) { return acc + x; }, 0
      );
    },

    callIt: function(fn) {
      var args = Array.prototype.slice.call(arguments, 1);
      fn.apply(null, args);
    },

    partialUsingArguments: function(fn) {
      var xs = Array.prototype.slice.call(arguments, 1);
      return function() {
        var ys = Array.prototype.slice.call(arguments);
        return fn.apply(null, xs.concat(ys));
      };
    },

    curryIt: function(fn) {
      var byArity = {
        0: fn,
        1: function(x) { return fn(x); },
        2: function(x) {
          return function(y) {
            return fn(x, y);
          };
        },
        3: function(x) {
          return function(y) {
            return function(z) {
              return fn(x, y, z);
            };
          };
        }
      };
      return byArity[fn.length];
    }
  };
});
