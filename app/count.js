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

      this.interval = setInterval(() => {
        console.log(this.current);
        this.current++;
        if (this.current > end) this.cancel();
      }, 100);

      return this;
    }
  };
});
