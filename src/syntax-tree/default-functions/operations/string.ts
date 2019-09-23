import { Operation } from '../../Operation';

Operation.functions.push({
    leftType: 'string',
    rightType: 'string',
    operator: '+',
    eval: (left, right) => ({ type: 'string', value: left + right }),
});
Operation.functions.push({
    leftType: 'string',
    rightType: 'number',
    operator: '+',
    eval: (left, right) => ({ type: 'string', value: left + right }),
});
Operation.functions.push({
    leftType: 'number',
    rightType: 'string',
    operator: '+',
    eval: (left, right) => ({ type: 'string', value: left + right }),
});

Operation.functions.push({
    leftType: 'string',
    rightType: 'string',
    operator: '==',
    eval: (left, right) => ({ type: 'boolean', value: left === right }),
});
Operation.functions.push({
    leftType: 'string',
    rightType: 'string',
    operator: '!=',
    eval: (left, right) => ({ type: 'boolean', value: left !== right }),
});
