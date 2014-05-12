'use strict';

/**
 * Check if a Buffer/Uint8Array is a SWF file
 *
 * @param {Buffer} buf
 * @api public
 */

module.exports = function (buf) {
    if (!buf || buf.length < 2) {
        return false;
    }

    return (buf[0] === 67 || buf[0] === 70) && buf[1] === 87 && buf[2] === 83;
};
