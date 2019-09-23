"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Parameter_1 = require("../../Parameter");
function addDefaults(functionality) {
    functionality.addFunctions({
        name: 'toString',
        scopeType: 'string',
        eval: function (scope, parameters) { return ({ value: scope, type: 'string' }); },
    });
    functionality.addFunctions({
        name: 'repeat',
        scopeType: 'string',
        eval: function (scope, parameters) {
            var repeatCounter = parameters[0].expression.eval(functionality);
            if (repeatCounter.type !== 'number')
                throw new Error('Wrong type for parameter of repeat. Expected number but got ' + repeatCounter.type);
            return {
                type: 'string',
                value: scope.repeat(repeatCounter.value),
            };
        },
    });
    functionality.addFunctions({
        name: 'charAt',
        scopeType: 'string',
        eval: function (scope, parameters) {
            var indexCounter = parameters[0].expression.eval(functionality);
            if (indexCounter.type !== 'number')
                throw new Error('Wrong type for parameter of repeat. Expected number but got ' + indexCounter.type);
            return {
                type: 'string',
                value: scope.charAt(indexCounter.value),
            };
        },
    });
    functionality.addFunctions({
        name: 'subString',
        scopeType: 'string',
        eval: function (scope, parameters) {
            var startParameter = parameters[0].expression.eval(functionality);
            if (startParameter.type !== 'number')
                throw new Error('Wrong type for startParameter of substring. Expected number but got ' + startParameter.type);
            var endParameter = parameters[1].expression.eval(functionality);
            if (endParameter.type !== 'number')
                throw new Error('Wrong type for endParameter of substring. Expected number but got ' + endParameter.type);
            return {
                type: 'string',
                value: scope.substring(startParameter.value, endParameter.value),
            };
        },
    });
    functionality.addFunctions({
        name: 'toLowerCase',
        scopeType: 'string',
        eval: function (scope, parameters) {
            return {
                type: 'string',
                value: scope.toLowerCase(),
            };
        },
    });
    functionality.addFunctions({
        name: 'toUpperCase',
        scopeType: 'string',
        eval: function (scope, parameters) {
            return {
                type: 'string',
                value: scope.toUpperCase(),
            };
        },
    });
    functionality.addFunctions({
        name: 'isEmpty',
        scopeType: 'string',
        eval: function (scope, parameters) {
            return {
                type: 'boolean',
                value: !Boolean(scope),
            };
        },
    });
    functionality.addFunctions({
        name: 'isNotEmpty',
        scopeType: 'string',
        eval: function (scope, parameters) {
            return {
                type: 'boolean',
                value: Boolean(scope),
            };
        },
    });
    functionality.addFunctions({
        name: 'parseInt',
        scopeType: 'string',
        eval: function (scope, parameters) {
            return {
                type: 'number',
                value: parseInt(scope),
            };
        },
    });
    functionality.addFunctions({
        name: 'length',
        scopeType: 'string',
        eval: function (scope, parameters) {
            return {
                type: 'number',
                value: scope.length,
            };
        },
    });
    functionality.addFunctions({
        name: 'charCodeAt',
        scopeType: 'string',
        eval: function (scope, parameters) {
            var index = Parameter_1.Parameter.getParam(functionality, parameters, 0, 'index', 'number');
            return {
                type: 'number',
                value: scope.charCodeAt(index.value),
            };
        },
    });
    functionality.addFunctions({
        name: 'concat',
        scopeType: 'string',
        eval: function (scope, parameters) {
            var strings = Parameter_1.Parameter.getParam(functionality, parameters, 0, 'strings', 'array');
            return {
                type: 'string',
                value: scope.concat.apply(scope, strings.value),
            };
        },
    });
    functionality.addFunctions({
        name: 'replace',
        scopeType: 'string',
        eval: function (scope, parameters) {
            var find = Parameter_1.Parameter.getParam(functionality, parameters, 0, 'find', 'string');
            var replace = Parameter_1.Parameter.getParam(functionality, parameters, 0, 'replace', 'string');
            return {
                type: 'string',
                value: scope.replace(find.value, replace.value),
            };
        },
    });
    functionality.addFunctions({
        name: 'indexOf',
        scopeType: 'string',
        eval: function (scope, parameters) {
            var find = Parameter_1.Parameter.getParam(functionality, parameters, 0, 'find', 'string');
            return {
                type: 'number',
                value: scope.indexOf(find.value),
            };
        },
    });
    functionality.addFunctions({
        name: 'endsWith',
        scopeType: 'string',
        eval: function (scope, parameters) {
            var find = Parameter_1.Parameter.getParam(functionality, parameters, 0, 'find', 'string');
            return {
                type: 'boolean',
                value: scope.endsWith(find.value),
            };
        },
    });
    functionality.addFunctions({
        name: 'startsWith',
        scopeType: 'string',
        eval: function (scope, parameters) {
            var find = Parameter_1.Parameter.getParam(functionality, parameters, 0, 'find', 'string');
            return {
                type: 'boolean',
                value: scope.startsWith(find.value),
            };
        },
    });
    functionality.addFunctions({
        name: 'trim',
        scopeType: 'string',
        eval: function (scope, parameters) {
            return {
                type: 'string',
                value: scope.trim(),
            };
        },
    });
    functionality.addFunctions({
        name: 'trimLeft',
        scopeType: 'string',
        eval: function (scope, parameters) {
            return {
                type: 'string',
                value: scope.trimLeft(),
            };
        },
    });
    functionality.addFunctions({
        name: 'trimRight',
        scopeType: 'string',
        eval: function (scope, parameters) {
            return {
                type: 'string',
                value: scope.trimRight(),
            };
        },
    });
    functionality.addFunctions({
        name: 'split',
        scopeType: 'string',
        eval: function (scope, parameters) {
            var separator = Parameter_1.Parameter.getParam(functionality, parameters, 0, 'separator', 'string');
            return {
                type: 'array',
                value: scope.split(separator.value),
            };
        },
    });
}
exports.addDefaults = addDefaults;
