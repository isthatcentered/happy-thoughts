"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.happyThoughts = undefined;

var _utils = require("./utils");

var emojis = ["🙀", "😻", "🙌", "💩", "🤘", "🦄"];

var happyThoughts = exports.happyThoughts = function happyThoughts(string, blacklist) {
	var replacements = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : emojis;

	if (!string) throw new Error("happyThoughts: arg \"string\" missing: Feed me words to parse");

	if (!blacklist) throw new Error("happyThoughts: arg \"blacklist\" missing: Feed me some dirty words to do my magic on");

	return string.replace(new RegExp(blacklist.join("|"), "ig"), // word1|word2, flags: [ignore case, global]
	function (word) {
		return (0, _utils.randomInArray)(replacements);
	});
};

// allows import via:
// - import whatever from "happy-thoughts"
// - const { happyThoughts } = require('happy-thoughts')
exports.default = happyThoughts;