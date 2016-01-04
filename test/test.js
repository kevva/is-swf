import path from 'path';
import pify from 'pify';
import Promise from 'pinkie-promise';
import readChunk from 'read-chunk';
import test from 'ava';
import fn from '../';

test(async t => {
	const fixture = path.join(__dirname, 'fixtures/test.swf');
	const buf = await pify(readChunk, Promise)(fixture, 0, 3);

	t.true(fn(buf));
});
