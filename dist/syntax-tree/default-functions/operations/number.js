"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Operation_1 = require("../../Operation");
Operation_1.Operation.functions.push({
    leftType: 'number',
    rightType: 'number',
    operator: '+',
    eval: function (left, right) { return ({ type: 'number', value: left + right }); },
});
Operation_1.Operation.functions.push({
    leftType: 'number',
    rightType: 'number',
    operator: '-',
    eval: function (left, right) { return ({ type: 'number', value: left - right }); },
});
Operation_1.Operation.functions.push({
    leftType: 'number',
    rightType: 'number',
    operator: '*',
    eval: function (left, right) { return ({ type: 'number', value: left * right }); },
});
Operation_1.Operation.functions.push({
    leftType: 'number',
    rightType: 'number',
    operator: '/',
    eval: function (left, right) { return ({ type: 'number', value: left / right }); },
});
Operation_1.Operation.functions.push({
    leftType: 'number',
    rightType: 'number',
    operator: '%',
    eval: function (left, right) { return ({ type: 'number', value: left % right }); },
});
Operation_1.Operation.functions.push({
    leftType: 'number',
    rightType: 'number',
    operator: '==',
    eval: function (left, right) { return ({ type: 'boolean', value: left === right }); },
});
Operation_1.Operation.functions.push({
    leftType: 'number',
    rightType: 'number',
    operator: '!=',
    eval: function (left, right) { return ({ type: 'boolean', value: left !== right }); },
});
Operation_1.Operation.functions.push({
    leftType: 'number',
    rightType: 'number',
    operator: '<',
    eval: function (left, right) { return ({ type: 'boolean', value: left < right }); },
});
Operation_1.Operation.functions.push({
    leftType: 'number',
    rightType: 'number',
    operator: '>',
    eval: function (left, right) { return ({ type: 'boolean', value: left > right }); },
});
Operation_1.Operation.functions.push({
    leftType: 'number',
    rightType: 'number',
    operator: '^',
    eval: function (left, right) { return ({ type: 'number', value: Math.pow(left, right) }); },
});
Operation_1.Operation.functions.push({
    leftType: 'number',
    rightType: 'number',
    operator: ',',
    eval: function (left, right) {
        while (right >= 1)
            right /= 10;
        return { type: 'number', value: left + right };
    },
});
