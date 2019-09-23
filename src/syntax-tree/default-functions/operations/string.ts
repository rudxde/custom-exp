import { Functionality } from '../../../functionality';
export function addDefaults(functionality: Functionality): void {
    functionality.addOperation({
        leftType: 'string',
        rightType: 'string',
        operator: '+',
        eval: (left, right) => ({ type: 'string', value: left + right }),
    });
    functionality.addOperation({
        leftType: 'string',
        rightType: 'number',
        operator: '+',
        eval: (left, right) => ({ type: 'string', value: left + right }),
    });
    functionality.addOperation({
        leftType: 'number',
        rightType: 'string',
        operator: '+',
        eval: (left, right) => ({ type: 'string', value: left + right }),
    });

    functionality.addOperation({
        leftType: 'string',
        rightType: 'string',
        operator: '==',
        eval: (left, right) => ({ type: 'boolean', value: left === right }),
    });
    functionality.addOperation({
        leftType: 'string',
        rightType: 'string',
        operator: '!=',
        eval: (left, right) => ({ type: 'boolean', value: left !== right }),
    });
}