(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var DEFAULT_OPTIONS = { state: null, props: null, callback: nx.noop };

  nx.updateStateValue = function (inContext, inName, inOptions) {
    var options = nx.mix(null, DEFAULT_OPTIONS, inOptions);
    var value = options.props[inName];
    if (value !== inContext.state[inName]) {
      var state = {};
      state[inName] = value;
      inContext.setState(state, function () {
        options.callback.call(inContext, inName, value, inOptions);
      });
    }
    return true;
  };


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.updateStateValue;
  }
})();
