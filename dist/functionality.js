"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var default_functions_1 = require("./syntax-tree/default-functions");
var Functionality = /** @class */ (function () {
    function Functionality(shouldAddDefaults) {
        if (shouldAddDefaults === void 0) { shouldAddDefaults = true; }
        this.fields = [];
        this.operations = [];
        this.functions = [];
        if (shouldAddDefaults) {
            default_functions_1.addDefaults(this);
        }
    }
    Functionality.prototype.addField = function (a) {
        var existingIndex = this.fields.findIndex(function (x) { return x.name === a.name; });
        if (existingIndex !== -1) {
            this.fields[existingIndex] = a;
        }
        else {
            this.fields.push(a);
        }
    };
    Functionality.prototype.addFunctions = function (a) {
        var existingIndex = this.functions.findIndex(function (x) { return x.name === a.name && x.scopeType === a.scopeType; });
        if (existingIndex !== -1) {
            this.functions[existingIndex] = a;
        }
        else {
            this.functions.push(a);
        }
    };
    Functionality.prototype.addOperation = function (a) {
        var existingIndex = this.operations.findIndex(function (x) {
            return x.operator === a.operator
                && x.leftType === a.leftType
                && x.rightType === a.rightType;
        });
        if (existingIndex !== -1) {
            this.operations[existingIndex] = a;
        }
        else {
            this.operations.push(a);
        }
    };
    return Functionality;
}());
exports.Functionality = Functionality;
