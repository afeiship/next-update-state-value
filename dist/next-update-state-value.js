/*!
 * name: @feizheng/next-update-state-value
 * description: Update state value for react.
 * homepage: https://github.com/afeiship/next-update-state-value
 * version: 1.0.0
 * date: 2020-08-18T14:19:27.746Z
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');

  nx.updateStateValue = function (inContext, inName, inProps, inCallback) {
    var value = inProps[inName];
    var callback = inCallback || nx.noop;
    if (value !== inContext.state[inName]) {
      var state = {};
      state[inName] = value;
      inContext.setState(state, function () {
        callback(inName, value);
      });
    }
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.updateStateValue;
  }
})();
