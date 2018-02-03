"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var happyThoughts = exports.happyThoughts = function happyThoughts() {
	var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
	var blacklist = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
	return string.replace(new RegExp(blacklist.join("|"), "ig"), // word1|word2, flags: [ignore case, global]
	"***");
};

// allows import via:
// - import whatever from "happy-thoughts"
// - const { happyThoughts } = require('happy-thoughts')
exports.default = happyThoughts;