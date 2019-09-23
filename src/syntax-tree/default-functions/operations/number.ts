import { Operation } from '../../Operation';

Operation.functions.push({
    leftType: 'number',
    rightType: 'number',
    operator: '+',
    eval: (left, right) => ({ type: 'number', value: left + right }),
});
Operation.functions.push({
    leftType: 'number',
    rightType: 'number',
    operator: '-',
    eval: (left, right) => ({ type: 'number', value: left - right }),
});
Operation.functions.push({
    leftType: 'number',
    rightType: 'number',
    operator: '*',
    eval: (left, right) => ({ type: 'number', value: left * right }),
});
Operation.functions.push({
    leftType: 'number',
    rightType: 'number',
    operator: '/',
    eval: (left, right) => ({ type: 'number', value: left / right }),
});
Operation.functions.push({
    leftType: 'number',
    rightType: 'number',
    operator: '%',
    eval: (left, right) => ({ type: 'number', value: left % right }),
});
Operation.functions.push({
    leftType: 'number',
    rightType: 'number',
    operator: '==',
    eval: (left, right) => ({ type: 'boolean', value: left === right }),
});
Operation.functions.push({
    leftType: 'number',
    rightType: 'number',
    operator: '!=',
    eval: (left, right) => ({ type: 'boolean', value: left !== right }),
});
Operation.functions.push({
    leftType: 'number',
    rightType: 'number',
    operator: '<',
    eval: (left, right) => ({ type: 'boolean', value: left < right }),
});
Operation.functions.push({
    leftType: 'number',
    rightType: 'number',
    operator: '>',
    eval: (left, right) => ({ type: 'boolean', value: left > right }),
});
Operation.functions.push({
    leftType: 'number',
    rightType: 'number',
    operator: '^',
    eval: (left, right) => ({ type: 'number', value: Math.pow(left, right) }),
});
Operation.functions.push({
    leftType: 'number',
    rightType: 'number',
    operator: ',',
    eval: (left, right) => {
        while (right >= 1) right /= 10;
        return { type: 'number', value: left + right };
    },
});
