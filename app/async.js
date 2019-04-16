if (typeof define !== 'function') {
  var define = require('amdefine')(module);
}

define(['jquery'], function($) {
  return {
    async: function(value) {
      return new Promise(resolve => resolve(value));
    },

    manipulateRemoteData: function(url) {
      const resolver = data => data.people.map(p => p.name);
      return fetch(url)
        .then(x => x.json())
        .then(x => x.people)
        .then(x => x.map(p => p.name))
        .then(x => x.sort());
    }
  };
});
