"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addDefaults(functionality) {
    functionality.addFunctions({
        name: 'toString',
        scopeType: 'boolean',
        eval: function (scope, parameters) { return ({ type: 'string', value: String(scope) }); },
    });
    functionality.addFunctions({
        name: 'toNumber',
        scopeType: 'boolean',
        eval: function (scope, parameters) { return ({ type: 'number', value: scope ? 1 : 0 }); },
    });
    functionality.addFunctions({
        name: 'not',
        scopeType: 'boolean',
        eval: function (scope, parameters) { return ({ type: 'boolean', value: !scope }); },
    });
}
exports.addDefaults = addDefaults;
