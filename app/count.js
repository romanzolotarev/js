if (typeof define !== 'function') {
  var define = require('amdefine')(module);
}

define(function() {
  return {
    count: function(start, end) {
      this.current = start;
      this.cancel = function() {
        clearInterval(this.interval);
      };

      var that = this;
      this.interval = setInterval(
        function() {
        console.log(that.current);
        that.current++;
        if (that.current > end) that.cancel();
      }, 100);

      return this;
    }
  };
});
