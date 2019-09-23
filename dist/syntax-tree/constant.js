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
var NumberConstant = /** @class */ (function (_super) {
    __extends(NumberConstant, _super);
    function NumberConstant(value) {
        var _this = _super.call(this) || this;
        _this.value = value;
        return _this;
    }
    NumberConstant.prototype.eval = function (functionality) {
        return {
            type: 'number',
            value: this.value
        };
    };
    return NumberConstant;
}(Expression_1.Expression));
exports.NumberConstant = NumberConstant;
var StringConstant = /** @class */ (function (_super) {
    __extends(StringConstant, _super);
    function StringConstant(value) {
        var _this = _super.call(this) || this;
        _this.value = value;
        return _this;
    }
    StringConstant.prototype.eval = function (functionality) {
        return {
            type: 'string',
            value: this.value
        };
    };
    return StringConstant;
}(Expression_1.Expression));
exports.StringConstant = StringConstant;
var BooleanConstant = /** @class */ (function (_super) {
    __extends(BooleanConstant, _super);
    function BooleanConstant(value) {
        var _this = _super.call(this) || this;
        _this.value = value;
        return _this;
    }
    BooleanConstant.prototype.eval = function (functionality) {
        return {
            type: 'boolean',
            value: this.value
        };
    };
    return BooleanConstant;
}(Expression_1.Expression));
exports.BooleanConstant = BooleanConstant;
