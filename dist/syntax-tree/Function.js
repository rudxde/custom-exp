"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Expression_1 = require("./Expression");
var Function = /** @class */ (function (_super) {
    __extends(Function, _super);
    function Function(scope, name, parameter) {
        var _this = _super.call(this) || this;
        _this.scope = scope;
        _this.name = name;
        _this.parameter = parameter;
        return _this;
    }
    Function.prototype.eval = function (functionality) {
        var _this = this;
        var scopeResult = this.scope.eval(functionality);
        var fn = functionality.functions.find(function (x) { return x.name === _this.name && x.scopeType === scopeResult.type; });
        if (!fn)
            throw new Error("Function " + this.name + " not found for type " + scopeResult.type);
        var result = fn.eval(scopeResult.value, this.parameter);
        return {
            type: result.type,
            value: result.value,
        };
    };
    return Function;
}(Expression_1.Expression));
exports.Function = Function;
