import { Functionality } from '../../../functionality';
export function addDefaults(functionality: Functionality): void {
    functionality.addOperation({
        leftType: 'number',
        rightType: 'number',
        operator: '+',
        eval: (left, right) => ({ type: 'number', value: left + right }),
    });
    functionality.addOperation({
        leftType: 'number',
        rightType: 'number',
        operator: '-',
        eval: (left, right) => ({ type: 'number', value: left - right }),
    });
    functionality.addOperation({
        leftType: 'number',
        rightType: 'number',
        operator: '*',
        eval: (left, right) => ({ type: 'number', value: left * right }),
    });
    functionality.addOperation({
        leftType: 'number',
        rightType: 'number',
        operator: '/',
        eval: (left, right) => ({ type: 'number', value: left / right }),
    });
    functionality.addOperation({
        leftType: 'number',
        rightType: 'number',
        operator: '%',
        eval: (left, right) => ({ type: 'number', value: left % right }),
    });
    functionality.addOperation({
        leftType: 'number',
        rightType: 'number',
        operator: '==',
        eval: (left, right) => ({ type: 'boolean', value: left === right }),
    });
    functionality.addOperation({
        leftType: 'number',
        rightType: 'number',
        operator: '!=',
        eval: (left, right) => ({ type: 'boolean', value: left !== right }),
    });
    functionality.addOperation({
        leftType: 'number',
        rightType: 'number',
        operator: '<',
        eval: (left, right) => ({ type: 'boolean', value: left < right }),
    });
    functionality.addOperation({
        leftType: 'number',
        rightType: 'number',
        operator: '>',
        eval: (left, right) => ({ type: 'boolean', value: left > right }),
    });
    functionality.addOperation({
        leftType: 'number',
        rightType: 'number',
        operator: '^',
        eval: (left, right) => ({ type: 'number', value: Math.pow(left, right) }),
    });
}
