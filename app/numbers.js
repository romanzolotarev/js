if (typeof define !== 'function') {
  var define = require('amdefine')(module);
}

define(function() {
  return {
    valueAtBit: function(num, bit) {
      var n = num.toString(2);
      var pos = n.length - bit;
      return parseInt(n[pos], 2);
    },

    base10: function(str) {
      return parseInt(str, 2);
    },

    convertToBinary: function(num) {
      return num.toString(2).padStart(8, '0');
    },

    multiply: function(a, b) {
      return parseFloat((a * b).toPrecision(1));
    }
  };
});
