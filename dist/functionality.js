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
    Functionality.prototype.getField = function (name) {
        var result = this.fields.find(function (x) { return x.name === name; });
        if (!result)
            throw new Error("No Field with identifier '" + name + "' found.");
        return result;
    };
    Functionality.prototype.getFunction = function (name, type) {
        var result = this.functions.find(function (x) { return x.name === name && x.scopeType === type; });
        if (!result)
            throw new Error("Function " + name + " not found for type " + type);
        return result;
    };
    Functionality.prototype.getOperation = function (leftType, rightType, operator) {
        var result = this.operations.find(function (x) { return x.leftType === leftType && x.rightType === rightType && x.operator === operator; });
        if (!result)
            throw new Error("No function found for operator '" + operator + "' for types '" + leftType + "'X'" + rightType + "'");
        return result;
    };
    return Functionality;
}());
exports.Functionality = Functionality;
