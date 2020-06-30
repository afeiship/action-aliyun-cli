/*!
 * name: @feizheng/next-spider-fetch
 * description: Fetch special for spider.
 * homepage: https://github.com/afeiship/next-spider-fetch
 * version: 1.0.0
 * date: 2020-06-30T02:20:42.454Z
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var nodeFetch = require('node-fetch');
  var nxApplyMiddlewares = require('@feizheng/next-apply-fetch-middleware');
  var nxFetchWithNodeTimeut = require('@feizheng/next-fetch-with-node-timeout');
  var nxFetchWithRandomUa = require('@feizheng/next-fetch-with-random-ua');
  var nxFetchWithDelay = require('@feizheng/next-fetch-with-delay');
  var nxFetchWithProxy = require('@feizheng/next-fetch-with-proxy');

  var DEFAULT_OPTIONS = {
    fetch: nodeFetch,
    middlewares: [
      nxFetchWithNodeTimeut,
      nxFetchWithRandomUa,
      nxFetchWithDelay,
      nxFetchWithProxy
    ]
  };

  nx.spiderFetch = function (inOptions) {
    var options = nx.mix(null, DEFAULT_OPTIONS, inOptions);
    return nxApplyMiddlewares(options.middlewares)(options.fetch)
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.spiderFetch;
  }
})();

//# sourceMappingURL=next-spider-fetch.js.map
