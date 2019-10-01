"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addDefaults(functionality) {
    // and
    functionality.addOperation({
        leftType: 'boolean',
        rightType: 'boolean',
        operator: '&&',
        eval: function (left, right) {
            return { type: 'boolean', value: left && right };
        },
    });
    // or
    functionality.addOperation({
        leftType: 'boolean',
        rightType: 'boolean',
        operator: '||',
        eval: function (left, right) {
            return { type: 'boolean', value: left || right };
        },
    });
    // implication
    functionality.addOperation({
        leftType: 'boolean',
        rightType: 'boolean',
        operator: '->',
        eval: function (left, right) {
            return { type: 'boolean', value: (left && right) || !left };
        },
    });
    //xor
    functionality.addOperation({
        leftType: 'boolean',
        rightType: 'boolean',
        operator: '^',
        eval: function (left, right) {
            return { type: 'boolean', value: (left && !right) || (!left && right) };
        },
    });
    functionality.addOperation({
        leftType: 'boolean',
        rightType: 'boolean',
        operator: '==',
        eval: function (left, right) { return ({ type: 'boolean', value: left === right }); },
    });
    functionality.addOperation({
        leftType: 'boolean',
        rightType: 'boolean',
        operator: '!=',
        eval: function (left, right) { return ({ type: 'boolean', value: left !== right }); },
    });
    functionality.addOperation({
        leftType: 'boolean',
        rightType: 'boolean',
        operator: '<',
        eval: function (left, right) { return ({ type: 'boolean', value: !left && right }); },
    });
    functionality.addOperation({
        leftType: 'boolean',
        rightType: 'boolean',
        operator: '>',
        eval: function (left, right) { return ({ type: 'boolean', value: left && !right }); },
    });
    functionality.addOperation({
        leftType: 'boolean',
        rightType: 'boolean',
        operator: '°°',
        eval: function (left, right) { return ({ type: 'string', value: '(◉ܫ◉)' }); },
    });
}
exports.addDefaults = addDefaults;
