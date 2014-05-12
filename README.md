# is-swf [![Build Status](https://travis-ci.org/kevva/is-swf.svg?branch=master)](https://travis-ci.org/kevva/is-swf)

> Check if a Buffer/Uint8Array is a SWF file

## Install

```bash
$ npm install --save is-swf
```

```bash
$ component install kevva/is-swf
```

```bash
$ bower install --save is-swf
```

## Usage

```js
var fs = require('fs');
var isSwf = require('is-swf');
var buf = fs.readFileSync('foo.swf');

isSwf(buf);
// => true
```

## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
