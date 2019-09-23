"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Operation_1 = require("../../Operation");
// and
Operation_1.Operation.functions.push({
    leftType: 'boolean',
    rightType: 'boolean',
    operator: '&&',
    eval: function (left, right) {
        return { type: 'boolean', value: left && right };
    },
});
// or
Operation_1.Operation.functions.push({
    leftType: 'boolean',
    rightType: 'boolean',
    operator: '||',
    eval: function (left, right) {
        return { type: 'boolean', value: left || right };
    },
});
// implication
Operation_1.Operation.functions.push({
    leftType: 'boolean',
    rightType: 'boolean',
    operator: '>',
    eval: function (left, right) {
        return { type: 'boolean', value: (left && right) || !left };
    },
});
//xor
Operation_1.Operation.functions.push({
    leftType: 'boolean',
    rightType: 'boolean',
    operator: '^',
    eval: function (left, right) {
        return { type: 'boolean', value: (left && !right) || (!left && right) };
    },
});
Operation_1.Operation.functions.push({
    leftType: 'boolean',
    rightType: 'boolean',
    operator: '==',
    eval: function (left, right) { return ({ type: 'boolean', value: left === right }); },
});
Operation_1.Operation.functions.push({
    leftType: 'boolean',
    rightType: 'boolean',
    operator: '!=',
    eval: function (left, right) { return ({ type: 'boolean', value: left !== right }); },
});
