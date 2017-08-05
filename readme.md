# is-swf [![Build Status](https://travis-ci.org/kevva/is-swf.svg?branch=master)](https://travis-ci.org/kevva/is-swf)

> Check if a Buffer/Uint8Array is a SWF file


## Install

```
$ npm install is-swf
```


## Usage

```js
const fs = require('fs');
const isSwf = require('is-swf');

ifSwf(fs.readFileSync('foo.swf'));
//=> true
```


## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
