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
    Field.prototype.eval = function (functionality) {
        var fn = functionality.getField(this.name);
        var result = fn.eval();
        return {
            type: result.type,
            value: result.value,
        };
    };
    return Field;
}(Expression_1.Expression));
exports.Field = Field;
