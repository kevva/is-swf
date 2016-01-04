# is-swf [![Build Status](http://img.shields.io/travis/kevva/is-swf/master.svg?style=flat)](https://travis-ci.org/kevva/is-swf)

> Check if a Buffer/Uint8Array is a SWF file


## Install

```
$ npm install --save is-swf
```


## Usage

```js
const fs = require('fs');
const isSwf = require('is-swf');

fs.readFile('foo.swf', (err, data) => {
	isSwf(data);
	//=> true
});
```


## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
