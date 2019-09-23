"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Function_1 = require("../../Function");
var Parameter_1 = require("../../Parameter");
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
    name: 'isEmpty',
    scopeType: 'string',
    eval: function (scope, parameters) {
        return {
            type: 'boolean',
            value: !Boolean(scope),
        };
    },
});
Function_1.Function.functions.push({
    name: 'isNotEmpty',
    scopeType: 'string',
    eval: function (scope, parameters) {
        return {
            type: 'boolean',
            value: Boolean(scope),
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
Function_1.Function.functions.push({
    name: 'length',
    scopeType: 'string',
    eval: function (scope, parameters) {
        return {
            type: 'number',
            value: scope.length,
        };
    },
});
Function_1.Function.functions.push({
    name: 'charCodeAt',
    scopeType: 'string',
    eval: function (scope, parameters) {
        var index = Parameter_1.Parameter.getParam(parameters, 0, 'index', 'number');
        return {
            type: 'number',
            value: scope.charCodeAt(index.value),
        };
    },
});
Function_1.Function.functions.push({
    name: 'concat',
    scopeType: 'string',
    eval: function (scope, parameters) {
        var strings = Parameter_1.Parameter.getParam(parameters, 0, 'strings', 'array');
        return {
            type: 'string',
            value: scope.concat.apply(scope, strings.value),
        };
    },
});
Function_1.Function.functions.push({
    name: 'replace',
    scopeType: 'string',
    eval: function (scope, parameters) {
        var find = Parameter_1.Parameter.getParam(parameters, 0, 'find', 'string');
        var replace = Parameter_1.Parameter.getParam(parameters, 0, 'replace', 'string');
        return {
            type: 'string',
            value: scope.replace(find.value, replace.value),
        };
    },
});
Function_1.Function.functions.push({
    name: 'indexOf',
    scopeType: 'string',
    eval: function (scope, parameters) {
        var find = Parameter_1.Parameter.getParam(parameters, 0, 'find', 'string');
        return {
            type: 'number',
            value: scope.indexOf(find.value),
        };
    },
});
Function_1.Function.functions.push({
    name: 'endsWith',
    scopeType: 'string',
    eval: function (scope, parameters) {
        var find = Parameter_1.Parameter.getParam(parameters, 0, 'find', 'string');
        return {
            type: 'boolean',
            value: scope.endsWith(find.value),
        };
    },
});
Function_1.Function.functions.push({
    name: 'startsWith',
    scopeType: 'string',
    eval: function (scope, parameters) {
        var find = Parameter_1.Parameter.getParam(parameters, 0, 'find', 'string');
        return {
            type: 'boolean',
            value: scope.startsWith(find.value),
        };
    },
});
Function_1.Function.functions.push({
    name: 'trim',
    scopeType: 'string',
    eval: function (scope, parameters) {
        return {
            type: 'string',
            value: scope.trim(),
        };
    },
});
Function_1.Function.functions.push({
    name: 'trimLeft',
    scopeType: 'string',
    eval: function (scope, parameters) {
        return {
            type: 'string',
            value: scope.trimLeft(),
        };
    },
});
Function_1.Function.functions.push({
    name: 'trimRight',
    scopeType: 'string',
    eval: function (scope, parameters) {
        return {
            type: 'string',
            value: scope.trimRight(),
        };
    },
});
Function_1.Function.functions.push({
    name: 'split',
    scopeType: 'string',
    eval: function (scope, parameters) {
        var separator = Parameter_1.Parameter.getParam(parameters, 0, 'separator', 'string');
        return {
            type: 'array',
            value: scope.split(separator.value),
        };
    },
});
