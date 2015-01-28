# is-swf [![Build Status](http://img.shields.io/travis/kevva/is-swf/master.svg?style=flat)](https://travis-ci.org/kevva/is-swf)

> Check if a Buffer/Uint8Array is a SWF file

## Install

```sh
$ npm install --save is-swf
```

## Usage

```js
var isSwf = require('is-swf');
var read = require('fs').readFileSync;

isSwf(read('foo.swf'));
//=> true
```

## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
