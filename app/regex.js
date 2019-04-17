if (typeof define !== 'function') {
  var define = require('amdefine')(module);
}

define(function() {
  return {
    containsNumber: function(str) {
      return str.match(/[0-9]/) !== null;
    },

    containsRepeatingLetter: function(str) {
      var alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');
      var pairs = alpha.map(function(x) {
        return x + x;
      });
      return str.match(new RegExp(pairs.join('|'), 'gi')) !== null;
    },

    endsWithVowel: function(str) {
      return str.match(/[aeiou]+$/i) !== null;
    },

    captureThreeNumbers: function(str) {
      var first3 = str.match(/[0-9]{3}/);
      return first3 === null ? false : first3[0];
    },

    matchesPattern: function(str) {
      return str.match(/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/) !== null;
    },

    isUSD: function(str) {
      return str.match(
        /^\$([0-9]{1,3},?){1}([0-9]{3},?){0,}(\.[0-9]{2})?$/g
      ) !== null ? true : false;
    }
  };
});
