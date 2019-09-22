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
var Operation = /** @class */ (function (_super) {
    __extends(Operation, _super);
    function Operation(left, right, operator) {
        var _this = _super.call(this) || this;
        _this.left = left;
        _this.right = right;
        _this.operator = operator;
        return _this;
    }
    Operation.prototype.eval = function () {
        var _this = this;
        var leftResult = this.left.eval();
        var rightResult = this.right.eval();
        var left = leftResult.value;
        var right = rightResult.value;
        var fn = Operation.functions.find(function (x) { return x.leftType === leftResult.type && x.rightType === rightResult.type && x.operator === _this.operator; });
        if (!fn)
            throw new Error("No function found for operator '" + this.operator + "' for types '" + leftResult.type + "x" + rightResult.type + "'");
        var result = fn.eval(left, right);
        return {
            type: result.type,
            value: result.value,
        };
    };
    Operation.functions = [];
    return Operation;
}(Expression_1.Expression));
exports.Operation = Operation;
