# is-swf [![Build Status](https://travis-ci.org/kevva/is-swf.svg?branch=master)](https://travis-ci.org/kevva/is-swf)

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
// => true
```

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License) © [Kevin Mårtensson](https://github.com/kevva)
