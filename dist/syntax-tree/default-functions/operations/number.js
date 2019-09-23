"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addDefaults(functionality) {
    functionality.addOperation({
        leftType: 'number',
        rightType: 'number',
        operator: '+',
        eval: function (left, right) { return ({ type: 'number', value: left + right }); },
    });
    functionality.addOperation({
        leftType: 'number',
        rightType: 'number',
        operator: '-',
        eval: function (left, right) { return ({ type: 'number', value: left - right }); },
    });
    functionality.addOperation({
        leftType: 'number',
        rightType: 'number',
        operator: '*',
        eval: function (left, right) { return ({ type: 'number', value: left * right }); },
    });
    functionality.addOperation({
        leftType: 'number',
        rightType: 'number',
        operator: '/',
        eval: function (left, right) { return ({ type: 'number', value: left / right }); },
    });
    functionality.addOperation({
        leftType: 'number',
        rightType: 'number',
        operator: '%',
        eval: function (left, right) { return ({ type: 'number', value: left % right }); },
    });
    functionality.addOperation({
        leftType: 'number',
        rightType: 'number',
        operator: '==',
        eval: function (left, right) { return ({ type: 'boolean', value: left === right }); },
    });
    functionality.addOperation({
        leftType: 'number',
        rightType: 'number',
        operator: '!=',
        eval: function (left, right) { return ({ type: 'boolean', value: left !== right }); },
    });
    functionality.addOperation({
        leftType: 'number',
        rightType: 'number',
        operator: '<',
        eval: function (left, right) { return ({ type: 'boolean', value: left < right }); },
    });
    functionality.addOperation({
        leftType: 'number',
        rightType: 'number',
        operator: '>',
        eval: function (left, right) { return ({ type: 'boolean', value: left > right }); },
    });
    functionality.addOperation({
        leftType: 'number',
        rightType: 'number',
        operator: '^',
        eval: function (left, right) { return ({ type: 'number', value: Math.pow(left, right) }); },
    });
    functionality.addOperation({
        leftType: 'number',
        rightType: 'number',
        operator: ',',
        eval: function (left, right) {
            while (right >= 1)
                right /= 10;
            return { type: 'number', value: left + right };
        },
    });
}
exports.addDefaults = addDefaults;
