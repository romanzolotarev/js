if (typeof define !== 'function') {
  var define = require('amdefine')(module);
}

define(function() {
  return {
    listFiles: function(data, dir) {
      const crawl = node =>
        !node.files
          ? []
          : node.files.reduce(
              (acc, x) =>
                typeof x === 'string' ? acc.concat(x) : acc.concat(crawl(x)),
              []
            );

      const crawlFromDir = (node, dir) =>
        !node.files
          ? []
          : !dir || node.dir === dir
          ? crawl(node)
          : node.files.reduce(
              (acc, x) =>
                typeof x === 'string' ? acc : acc.concat(crawlFromDir(x, dir)),
              []
            );
      return crawlFromDir(data, dir);
    },

    permute: function(arr) {
      const permutator = (acc, cur, idx, src) =>
        acc.concat(
          src.length < 2
            ? cur
            : src
                .slice(0, idx)
                .concat(src.slice(idx + 1))
                .reduce(permutator, [])
                .map(x => [cur].concat(x))
        );

      return arr.reduce(permutator, []);
    }
  };
});
