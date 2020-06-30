const nx = require('@feizheng/next-js-core2');
require('../src/next-spider-fetch');

const fetch = nx.spiderFetch();

describe('api.basic test', () => {
  test('nx.spiderFetch fetch html', function (done) {
    fetch('https://www.baidu.com').then(res => res.text()).then(res => {
      // console.log(res);
      expect(res.includes('www.baidu.com')).toBe(true);
      done();
    })
  });

  test('nx.spiderFetch fetch json', function (done) {
    fetch('https://api.github.com/users/afeiship').then(res => res.json()).then(res => {
      // console.log(res);
      expect(res.login).toBe('afeiship');
      done();
    });
  });
});
