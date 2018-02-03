export const sensitiveWords = ( string = "", blacklist = [] ) =>
	string.replace(
		new RegExp( blacklist.join( "|" ), "ig" ), // word1|word2, flags: [ignore case, global]
		"***",
	)

// allows import via:
// - import whatever from "sensitive-words"
// - const { sensitiveWords } = require('sensitive-words')
export default sensitiveWords