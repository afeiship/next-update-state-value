/*!
 * name: @feizheng/next-update-state-value
 * description: Update state value for react.
 * homepage: https://github.com/afeiship/next-update-state-value
 * version: 1.0.0
 * date: 2020-08-18T14:25:36.360Z
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
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
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.updateStateValue;
  }
})();
