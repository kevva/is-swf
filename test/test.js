/*global describe, it */
'use strict';

var assert = require('assert');
var isSwf = require('../');
var path = require('path');
var readChunk = require('read-chunk');

describe('isSwf()', function () {
    function check(file) {
        return isSwf(readChunk.sync(file, 0, 3));
    }

    it('should detect SWF from buffer', function (cb) {
        assert(check(path.join(__dirname, 'fixtures/test.swf')));
        cb();
    });
});
