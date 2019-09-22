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
var Field = /** @class */ (function (_super) {
    __extends(Field, _super);
    function Field(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        return _this;
    }
    Field.prototype.eval = function () {
        var _this = this;
        var fn = Field.functions.find(function (x) { return x.name === _this.name; });
        if (!fn)
            throw new Error("No Field with identifier '" + this.name + "' found.");
        var result = fn.eval();
        return {
            type: result.type,
            value: result.value,
        };
    };
    Field.functions = [];
    return Field;
}(Expression_1.Expression));
exports.Field = Field;
