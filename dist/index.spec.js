"use strict";

var _index = require("./index");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("Module when called", function () {

	describe("When passed no string", function () {
		return it("should throw", function () {
			return expect(function () {
				return (0, _index2.default)();
			}).toThrow();
		});
	});

	describe("When passed no blacklist", function () {
		return it("should throw", function () {
			return expect(function () {
				return (0, _index2.default)("I passed a string but no blacklist");
			}).toThrow();
		});
	});

	describe("When passed string with blacklisted words", function () {

		it("should remove blacklisted words from string", function () {

			var _blacklist = ["looser", "bore"],
			    _result = (0, _index2.default)("Batman says Clark Kent's a looser and a bit of a bore", _blacklist);

			_blacklist.forEach(function (word) {
				return expect(_result.includes(word)).toBe(false);
			});
		});

		// @todo: add blacklisted word replaced with any of emoji test

		it("should not mutate original string", function () {

			var _phrase = "Wuuuuut, unicorn waffles?!",
			    _blacklist = ["unicorn"],
			    _result = (0, _index2.default)(_phrase, ["unicorn"]);

			_blacklist.forEach(function (word) {
				return expect(_result.includes(word)).toBe(false);
			});

			expect(_phrase).not.toEqual(_result);
		});
	});
});