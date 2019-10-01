"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Parameter = /** @class */ (function () {
    function Parameter(expression) {
        this.expression = expression;
    }
    Parameter.getParam = function (functionality, parameters, index, name, type) {
        if (parameters.length <= index)
            throw new Error("No parameter '" + name + " provided!");
        var evaluated = parameters[index].expression.eval(functionality);
        if (type && evaluated.type !== type)
            throw new Error("Wrong type for Parameter '" + name + " expected '" + type + "', but got '" + evaluated.type + "'");
        return evaluated;
    };
    Parameter.getOptionalParam = function (functionality, parameters, index, name, type) {
        if (parameters.length <= index)
            return undefined;
        var evaluated = parameters[index].expression.eval(functionality);
        if (type && evaluated.type !== type)
            throw new Error("Wrong type for Parameter '" + name + " expected '" + type + "', but got '" + evaluated.type + "'");
        return evaluated;
    };
    return Parameter;
}());
exports.Parameter = Parameter;
