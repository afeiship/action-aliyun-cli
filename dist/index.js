/*!
 * name: @jswork/next-spider-fetch
 * description: Fetch special for spider.
 * homepage: https://github.com/afeiship/next-spider-fetch
 * version: 1.0.0
 * date: 2021-07-28 14:22:27
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var nodeFetch = require('node-fetch');
  var nxApplyMiddlewares = require('@jswork/next-apply-fetch-middleware');
  var nxFetchWithNodeTimeut = require('@jswork/next-fetch-with-node-timeout');
  var nxFetchWithRandomUa = require('@jswork/next-fetch-with-random-ua');
  var nxFetchWithDelay = require('@jswork/next-fetch-with-delay');
  var nxFetchWithProxy = require('@jswork/next-fetch-with-proxy');
  var nxFetchWithDebug = require('@jswork/next-fetch-with-debug');
  var nxFetchWithRetry = require('@jswork/next-fetch-with-retry');

  var spiderFetch = nxApplyMiddlewares([
    nxFetchWithNodeTimeut,
    nxFetchWithRandomUa,
    nxFetchWithDelay,
    nxFetchWithProxy,
    nxFetchWithDebug,
    nxFetchWithRetry
  ])(nodeFetch);

  nx.spiderFetch = spiderFetch;


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.spiderFetch;
  }
})();
