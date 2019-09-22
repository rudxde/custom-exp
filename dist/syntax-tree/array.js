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
var Array = /** @class */ (function (_super) {
    __extends(Array, _super);
    function Array(expressions) {
        var _this = _super.call(this) || this;
        _this.expressions = expressions;
        return _this;
    }
    Array.prototype.eval = function () {
        return {
            type: 'array',
            value: this.expressions.map(function (x) { return x.eval(); })
        };
    };
    return Array;
}(Expression_1.Expression));
exports.Array = Array;
