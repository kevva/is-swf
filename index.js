'use strict';

module.exports = function (buf) {
	if (!buf || buf.length < 3) {
		return false;
	}

	return (buf[0] === 0x43 || buf[0] === 0x46 || buf[0] === 0x5a) && buf[1] === 0x57 && buf[2] === 0x53;
};
