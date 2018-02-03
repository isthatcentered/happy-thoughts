import { randomInArray } from "./utils"

const emojis = [
	"🤓",
	"🦄",
	"🙊",
	"😅",
	"😱",
	"😹",
	"🙀",
	"😻",
	"🙌",
	"💪",
	"💩",
	"🤘",
]


export const happyThoughts = (
	string,
	blacklist,
	replacements = emojis,
) => {
	if ( !string )
		throw new Error( `happyThoughts: arg "string" missing: Feed me words to parse` )
	
	if ( !blacklist )
		throw new Error( `happyThoughts: arg "blacklist" missing: Feed me some dirty words to do my magic on` )
	
	return string
		.replace(
			new RegExp( blacklist.join( "|" ), "ig" ), // word1|word2, flags: [ignore case, global]
			word =>
				randomInArray( replacements ),
		)
}

// allows import via:
// - import whatever from "happy-thoughts"
// - const { happyThoughts } = require('happy-thoughts')
export default happyThoughts