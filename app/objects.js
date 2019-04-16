if (typeof define !== 'function') {
  var define = require('amdefine')(module);
}

define(function() {
  return {
    alterContext: function(fn, obj) {
      return fn.bind(obj)();
    },

    alterObjects: function(constructor, greeting) {
      return Object.assign(constructor.prototype, { greeting });
    },

    iterate: function(obj) {
      return Object.keys(obj).map(x => x + ': ' + obj[x]);
    }
  };
});
