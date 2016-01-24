var fs = require('fs'),
    path = require('path');

/**
 * Test whether a folder is part of a git or svn repo. Then call the `callback`
 * with either `svn` or `git`.
 * @param  {string} folderpath
 */
module.exports = function(path, callback) {
	var issvn, isgit;
	fs.stat( path + '/.git', function(error, stats) {
		if ( ! error && stats.isDirectory() ) {
			callback('git');
		} else {
			isgit = false;
			if ( issvn === false ) {
				callback(false);
			}
		}
	});
	fs.stat( path + '/.svn', function(error, stats) {
		if ( ! error && stats.isDirectory() ) {
			callback('svn');
		} else {
			issvn = false;
			if ( isgit === false ) {
				callback(false);
			}
		}
	});
}
