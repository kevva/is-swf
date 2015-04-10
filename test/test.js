'use strict';

var path = require('path');
var readChunk = require('read-chunk');
var test = require('ava');
var isSwf = require('../');

test('should detect SWF from buffer', function (t) {
	t.plan(2);

	readChunk(path.join(__dirname, 'fixtures/test.swf'), 0, 3, function (err, buf) {
		t.assert(!err, err);
		t.assert(isSwf(buf));
	});
});
