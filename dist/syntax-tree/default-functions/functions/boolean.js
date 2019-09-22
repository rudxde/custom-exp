"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Function_1 = require("../../Function");
Function_1.Function.functions.push({
    name: 'toString',
    scopeType: 'boolean',
    eval: function (scope, parameters) { return ({ type: 'string', value: String(scope) }); },
});
Function_1.Function.functions.push({
    name: 'toNumber',
    scopeType: 'boolean',
    eval: function (scope, parameters) { return ({ type: 'number', value: scope ? 1 : 0 }); },
});
Function_1.Function.functions.push({
    name: 'not',
    scopeType: 'boolean',
    eval: function (scope, parameters) { return ({ type: 'boolean', value: !scope }); },
});
