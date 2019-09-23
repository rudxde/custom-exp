"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Operation_1 = require("../../Operation");
Operation_1.Operation.functions.push({
    leftType: 'string',
    rightType: 'string',
    operator: '+',
    eval: function (left, right) { return ({ type: 'string', value: left + right }); },
});
Operation_1.Operation.functions.push({
    leftType: 'string',
    rightType: 'number',
    operator: '+',
    eval: function (left, right) { return ({ type: 'string', value: left + right }); },
});
Operation_1.Operation.functions.push({
    leftType: 'number',
    rightType: 'string',
    operator: '+',
    eval: function (left, right) { return ({ type: 'string', value: left + right }); },
});
Operation_1.Operation.functions.push({
    leftType: 'string',
    rightType: 'string',
    operator: '==',
    eval: function (left, right) { return ({ type: 'boolean', value: left === right }); },
});
Operation_1.Operation.functions.push({
    leftType: 'string',
    rightType: 'string',
    operator: '!=',
    eval: function (left, right) { return ({ type: 'boolean', value: left !== right }); },
});
