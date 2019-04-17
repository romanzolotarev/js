if (typeof define !== 'function') {
  var define = require('amdefine')(module);
}

//
// Using Promise and fetch instead of jQuery
//
define([], function() {
  return {
    async: function(value) {
      return new Promise(
        function(resolve) { return resolve(value); }
      );
    },

    manipulateRemoteData: function(url) {
      function resolver(data) {
        return data.people.map(
          function(p) { return p.name; }
        );
      }

      return fetch(url)
        .then(function(x) { return x.json(); })
        .then(function(x) { return x.people; })
        .then(function(x) { return x.map(
          function(p) { return p.name; }
        ); })
        .then(function(x) { return x.sort(); });
    }
  };
});
