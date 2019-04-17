if (typeof define !== 'function') {
  var define = require('amdefine')(module);
}

define(function () {
  return {
    listFiles: function (data, dir) {
      function crawl(node) {
        return !node.files ? []
          : node.files.reduce(function (acc, x) {
            return typeof x === 'string' ? acc.concat(x)
              : acc.concat(crawl(x));
          }, []);
      }

      function crawlFromDir(node, dir){
        return !node.files ? []
          : !dir || node.dir === dir ? crawl(node)
            : node.files.reduce(
              function (acc, x) {
                return typeof x === 'string' ? acc
                  : acc.concat(crawlFromDir(x, dir));
              }, []
            );
      }
      return crawlFromDir(data, dir);
    },

    permute: function (arr) {
      function permutator (acc, cur, idx, src) {
        return acc.concat(
          src.length < 2 ? cur
            : src
              .slice(0, idx)
              .concat(src.slice(idx + 1))
              .reduce(permutator, [])
              .map(function(x) { return [cur].concat(x); })
        );
      }

      return arr.reduce(permutator, []);
    }
  };
});
