"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addDefaults(functionality) {
    functionality.addOperation({
        leftType: 'string',
        rightType: 'string',
        operator: '+',
        eval: function (left, right) { return ({ type: 'string', value: left + right }); },
    });
    functionality.addOperation({
        leftType: 'string',
        rightType: 'number',
        operator: '+',
        eval: function (left, right) { return ({ type: 'string', value: left + right }); },
    });
    functionality.addOperation({
        leftType: 'number',
        rightType: 'string',
        operator: '+',
        eval: function (left, right) { return ({ type: 'string', value: left + right }); },
    });
    functionality.addOperation({
        leftType: 'string',
        rightType: 'string',
        operator: '==',
        eval: function (left, right) { return ({ type: 'boolean', value: left === right }); },
    });
    functionality.addOperation({
        leftType: 'string',
        rightType: 'string',
        operator: '!=',
        eval: function (left, right) { return ({ type: 'boolean', value: left !== right }); },
    });
}
exports.addDefaults = addDefaults;
