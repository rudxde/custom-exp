"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var number_1 = require("./number");
var string_1 = require("./string");
var boolean_1 = require("./boolean");
var array_1 = require("./array");
function addDefaults(functionality) {
    number_1.addDefaults(functionality);
    string_1.addDefaults(functionality);
    boolean_1.addDefaults(functionality);
    array_1.addDefaults(functionality);
}
exports.addDefaults = addDefaults;
