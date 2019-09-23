import { Operation } from '../../Operation';
// and
Operation.functions.push({
    leftType: 'boolean',
    rightType: 'boolean',
    operator: '&&',
    eval: (left: boolean, right: boolean) => {
        return { type: 'boolean', value: left && right };
    },
});
// or
Operation.functions.push({
    leftType: 'boolean',
    rightType: 'boolean',
    operator: '||',
    eval: (left: boolean, right: boolean) => {
        return { type: 'boolean', value: left || right };
    },
});
// implication
Operation.functions.push({
    leftType: 'boolean',
    rightType: 'boolean',
    operator: '>',
    eval: (left: boolean, right: boolean) => {
        return { type: 'boolean', value: (left && right) || !left };
    },
});
//xor
Operation.functions.push({
    leftType: 'boolean',
    rightType: 'boolean',
    operator: '^',
    eval: (left: boolean, right: boolean) => {
        return { type: 'boolean', value: (left && !right) || (!left && right) };
    },
});

Operation.functions.push({
    leftType: 'boolean',
    rightType: 'boolean',
    operator: '==',
    eval: (left, right) => ({ type: 'boolean', value: left === right }),
});
Operation.functions.push({
    leftType: 'boolean',
    rightType: 'boolean',
    operator: '!=',
    eval: (left, right) => ({ type: 'boolean', value: left !== right }),
});