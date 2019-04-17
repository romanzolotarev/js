if (typeof define !== 'function') {
  var define = require('amdefine')(module);
}

define(function() {
  return {
    alterContext: function(fn, obj) {
      return fn.bind(obj)();
    },

    alterObjects: function(constructor, greeting) {
      return Object.assign(constructor.prototype, { greeting: greeting });
    },

    iterate: function(obj) {
      return Object.keys(obj).map(
        function(x) { return x + ': ' + obj[x]; });
    }
  };
});
