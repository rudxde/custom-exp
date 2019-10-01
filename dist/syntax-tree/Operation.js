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
    Operation.prototype.eval = function (functionality) {
        var leftResult = this.left.eval(functionality);
        var rightResult = this.right.eval(functionality);
        var left = leftResult.value;
        var right = rightResult.value;
        var fn = functionality.getOperation(leftResult.type, rightResult.type, this.operator);
        var result = fn.eval(left, right);
        return {
            type: result.type,
            value: result.value,
        };
    };
    return Operation;
}(Expression_1.Expression));
exports.Operation = Operation;
