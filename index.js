'use strict';
module.exports = buf => {
	if (!buf || buf.length < 3) {
		return false;
	}

	return (buf[0] === 0x43 || buf[0] === 0x46 || buf[0] === 0x5A) && buf[1] === 0x57 && buf[2] === 0x53;
};
