"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addDefaults(functionality) {
    functionality.addFunctions({
        name: 'toStringArray',
        scopeType: 'array',
        eval: function (scope, parameters) {
            return {
                type: 'array',
                value: scope.map(function (element) {
                    var convertFn = functionality.functions.find(function (x) { return x.name === 'toString' && x.scopeType === element.type; });
                    if (!convertFn)
                        throw new Error("Function 'toString' not found for type " + element.type);
                    return convertFn.eval(element.value, []);
                })
            };
        }
    });
    functionality.addFunctions({
        name: 'toString',
        scopeType: 'array',
        eval: function (scope, parameters) {
            return {
                type: 'array',
                value: '[' + scope.map(function (element) {
                    var convertFn = functionality.functions.find(function (x) { return x.name === 'toString' && x.scopeType === element.type; });
                    if (!convertFn)
                        throw new Error("Function 'toString' not found for type " + element.type);
                    return convertFn.eval(element.value, []).value;
                }).join(', ') + ']'
            };
        }
    });
    functionality.addFunctions({
        name: 'join',
        scopeType: 'array',
        eval: function (scope, parameters) {
            var separator = parameters[0].expression.eval(functionality);
            if (separator.type !== 'string')
                throw new Error('Wrong type for parameter separator of join. Expected string but got ' + separator.type);
            return {
                type: 'string',
                value: scope.map(function (element) {
                    var convertFn = functionality.functions.find(function (x) { return x.name === 'toString' && x.scopeType === element.type; });
                    if (!convertFn)
                        throw new Error("Function 'toString' not found for type " + element.type);
                    return convertFn.eval(element.value, []).value;
                }).join(separator.value),
            };
        }
    });
    functionality.addFunctions({
        name: 'get',
        scopeType: 'array',
        eval: function (scope, parameters) {
            var index = parameters[0].expression.eval(functionality);
            if (index.type !== 'number')
                throw new Error('Wrong type for parameter index of get. Expected number but got ' + index.type);
            if (scope.length <= index.value)
                throw new Error("Index out of bound! (" + index.value + "/" + (scope.length - 1) + ")");
            return { type: scope[index.value].type, value: scope[index.value].value };
        }
    });
}
exports.addDefaults = addDefaults;
