# Git or SVN

Test whether a folder path is part of a git or SVN repository.

```javascript
var gitorsvn = require('git-or-svn');

gitorsvn( __dirname, function(gitorsvn) {
	if ( gitorsvn === 'git' ) {
		// It's a git repo!
	} else if ( gitorsvn === 'svn' ) {
		// It's an svn repo!
	} else {
		// It's neither!
	}
});
```
