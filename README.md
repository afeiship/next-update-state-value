# next-update-state-value
> Update state value for react.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @feizheng/next-update-state-value
```

## usage
```js
import '@feizheng/next-update-state-value';

class ReactList extends React.Component{
  //...
  shouldComponentUpdate(inProps){
    nx.updateStateValue(this, 'value', inProps, /* callback is optional */);
    return true;
  }
  //...
}
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-update-state-value/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@feizheng/next-update-state-value
[version-url]: https://npmjs.org/package/@feizheng/next-update-state-value

[license-image]: https://img.shields.io/npm/l/@feizheng/next-update-state-value
[license-url]: https://github.com/afeiship/next-update-state-value/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@feizheng/next-update-state-value
[size-url]: https://github.com/afeiship/next-update-state-value/blob/master/dist/next-update-state-value.min.js

[download-image]: https://img.shields.io/npm/dm/@feizheng/next-update-state-value
[download-url]: https://www.npmjs.com/package/@feizheng/next-update-state-value
