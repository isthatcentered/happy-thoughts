"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _ = require(".");

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("Module when called", function () {

	it("should return a string", function () {
		return expect(_typeof((0, _2.default)())).toBe("string");
	});

	describe("When passed string with one blacklisted word", function () {
		return it("should replace blacklisted word with \"***\"", function () {
			return expect((0, _2.default)("Kill Bill", ["Bill"])).toBe("Kill ***");
		});
	});

	describe("When passed string with multiple blacklisted words", function () {
		return it("should replace blacklisted words with \"***\"", function () {
			return expect((0, _2.default)("Kill Bill and Roger", ["Bill", "Roger"])).toBe("Kill *** and ***");
		});
	});
});