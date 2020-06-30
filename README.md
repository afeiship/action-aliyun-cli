# next-spider-fetch
> Fetch special for spider.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @feizheng/next-spider-fetch
```

## usage
```js
import '@feizheng/next-spider-fetch';

nx.spiderFetch('https://api.github.com/users/afeiship').then(res=>res.json()).then(res=>{
  console.log(res);
});
```

## options
| name    | type   | description            |
| ------- | ------ | ---------------------- |
| timeout | Number | Timeout for fetch.     |
| delay   | Number | Request with delay.    |
| proxy   | String | Set proxy for request. |

## license
Code released under [the MIT license](https://github.com/afeiship/next-spider-fetch/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@feizheng/next-spider-fetch
[version-url]: https://npmjs.org/package/@feizheng/next-spider-fetch

[license-image]: https://img.shields.io/npm/l/@feizheng/next-spider-fetch
[license-url]: https://github.com/afeiship/next-spider-fetch/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@feizheng/next-spider-fetch
[size-url]: https://github.com/afeiship/next-spider-fetch/blob/master/dist/next-spider-fetch.min.js

[download-image]: https://img.shields.io/npm/dm/@feizheng/next-spider-fetch
[download-url]: https://www.npmjs.com/package/@feizheng/next-spider-fetch
