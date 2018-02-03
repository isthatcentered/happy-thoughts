"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _ = require(".");

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("Module when called", function () {

	it("should return a string", function () {
		return expect(_typeof((0, _2.default)())).toBe("string");
	});

	it("should return a Wuuuuut", function () {
		return expect((0, _2.default)()).toBe("Wuuuuut");
	});
});