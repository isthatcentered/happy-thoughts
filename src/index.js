export const happyThoughts = ( string = "", blacklist = [] ) =>
	string.replace(
		new RegExp( blacklist.join( "|" ), "ig" ), // word1|word2, flags: [ignore case, global]
		"***",
	)

// allows import via:
// - import whatever from "happy-thoughts"
// - const { happyThoughts } = require('happy-thoughts')
export default happyThoughts