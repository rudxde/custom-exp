"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Function_1 = require("../../Function");
Function_1.Function.functions.push({
    name: 'toString',
    scopeType: 'string',
    eval: function (scope, parameters) { return ({ value: scope, type: 'string' }); },
});
Function_1.Function.functions.push({
    name: 'repeat',
    scopeType: 'string',
    eval: function (scope, parameters) {
        var repeatCounter = parameters[0].expression.eval();
        if (repeatCounter.type !== 'number')
            throw new Error('Wrong type for parameter of repeat. Expected number but got ' + repeatCounter.type);
        return {
            type: 'string',
            value: scope.repeat(repeatCounter.value),
        };
    },
});
Function_1.Function.functions.push({
    name: 'charAt',
    scopeType: 'string',
    eval: function (scope, parameters) {
        var indexCounter = parameters[0].expression.eval();
        if (indexCounter.type !== 'number')
            throw new Error('Wrong type for parameter of repeat. Expected number but got ' + indexCounter.type);
        return {
            type: 'string',
            value: scope.charAt(indexCounter.value),
        };
    },
});
Function_1.Function.functions.push({
    name: 'subString',
    scopeType: 'string',
    eval: function (scope, parameters) {
        var startParameter = parameters[0].expression.eval();
        if (startParameter.type !== 'number')
            throw new Error('Wrong type for startParameter of substring. Expected number but got ' + startParameter.type);
        var endParameter = parameters[1].expression.eval();
        if (endParameter.type !== 'number')
            throw new Error('Wrong type for endParameter of substring. Expected number but got ' + endParameter.type);
        return {
            type: 'string',
            value: scope.substring(startParameter.value, endParameter.value),
        };
    },
});
Function_1.Function.functions.push({
    name: 'toLowerCase',
    scopeType: 'string',
    eval: function (scope, parameters) {
        return {
            type: 'string',
            value: scope.toLowerCase(),
        };
    },
});
Function_1.Function.functions.push({
    name: 'toUpperCase',
    scopeType: 'string',
    eval: function (scope, parameters) {
        return {
            type: 'string',
            value: scope.toUpperCase(),
        };
    },
});
Function_1.Function.functions.push({
    name: 'parseInt',
    scopeType: 'string',
    eval: function (scope, parameters) {
        return {
            type: 'number',
            value: parseInt(scope),
        };
    },
});
