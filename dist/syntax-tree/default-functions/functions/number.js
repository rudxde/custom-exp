"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addDefaults(functionality) {
    functionality.addFunctions({
        name: 'round',
        scopeType: 'number',
        eval: function (scope, parameters) { return ({ type: 'number', value: Math.round(scope) }); },
    });
    functionality.addFunctions({
        name: 'toString',
        scopeType: 'number',
        eval: function (scope, parameters) { return ({ type: 'string', value: String(scope) }); },
    });
    functionality.addFunctions({
        name: 'sqrt',
        scopeType: 'number',
        eval: function (scope, parameters) { return ({ type: 'number', value: Math.sqrt(scope) }); },
    });
}
exports.addDefaults = addDefaults;
