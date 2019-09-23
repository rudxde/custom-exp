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
var Condition = /** @class */ (function (_super) {
    __extends(Condition, _super);
    function Condition(condition, thenEx, elseEx) {
        var _this = _super.call(this) || this;
        _this.condition = condition;
        _this.thenEx = thenEx;
        _this.elseEx = elseEx;
        return _this;
    }
    Condition.prototype.eval = function (functionality) {
        var evalConditionResult = this.condition.eval(functionality);
        var result = evalConditionResult.value;
        if (evalConditionResult.type !== 'boolean') {
            result = Boolean(evalConditionResult.value);
        }
        if (result) {
            return this.thenEx.eval(functionality);
        }
        else {
            return this.elseEx.eval(functionality);
        }
    };
    return Condition;
}(Expression_1.Expression));
exports.Condition = Condition;
