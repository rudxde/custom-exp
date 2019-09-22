"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Function_1 = require("../../Function");
Function_1.Function.functions.push({
    name: 'round',
    scopeType: 'number',
    eval: function (scope, parameters) { return ({ type: 'number', value: Math.round(scope) }); },
});
Function_1.Function.functions.push({
    name: 'toString',
    scopeType: 'number',
    eval: function (scope, parameters) { return ({ type: 'string', value: String(scope) }); },
});
Function_1.Function.functions.push({
    name: 'sqrt',
    scopeType: 'number',
    eval: function (scope, parameters) { return ({ type: 'number', value: Math.sqrt(scope) }); },
});
