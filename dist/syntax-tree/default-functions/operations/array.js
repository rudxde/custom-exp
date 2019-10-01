"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addDefaults(functionality) {
    // concat array
    functionality.addOperation({
        leftType: 'array',
        rightType: 'array',
        operator: '+',
        eval: function (left, right) {
            return {
                type: 'array',
                value: left.concat(right)
            };
        }
    });
    functionality.addOperation({
        leftType: 'array',
        rightType: 'array',
        operator: '<',
        eval: function (left, right) { return functionality.getOperation('number', 'number', '<').eval(left.length, right.length); },
    });
    functionality.addOperation({
        leftType: 'array',
        rightType: 'array',
        operator: '>',
        eval: function (left, right) { return functionality.getOperation('number', 'number', '>').eval(left.length, right.length); },
    });
}
exports.addDefaults = addDefaults;
