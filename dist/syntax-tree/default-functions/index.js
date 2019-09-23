"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operations_1 = require("./operations/");
var functions_1 = require("./functions/");
function addDefaults(functionality) {
    operations_1.addDefaults(functionality);
    functions_1.addDefaults(functionality);
}
exports.addDefaults = addDefaults;
