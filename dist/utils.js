"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var randomNumber = function randomNumber(max) {
	return Math.floor(Math.random() * max);
};

var randomInArray = exports.randomInArray = function randomInArray(arr) {
	return arr[randomNumber(arr.length)];
};