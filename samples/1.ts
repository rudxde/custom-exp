import { Functionality, evaluateExpression, IEvalResult, Parameter } from '../dist';

const functionality = new Functionality();

functionality.addField({
    name: 'foo',
    eval: () => ({
        value: 'FOO',
        type: 'string'
    }),
});

functionality.addField({
    name: 'bar',
    eval: () => ({
        value: 'BAR',
        type: 'string'
    }),
});

functionality.addField({
    name: 'numbers',
    eval: () => ({
        value: '1,2,3,4,5',
        type: 'string'
    }),
});

functionality.addFunctions({
    scopeType: 'number',
    name: 'factorial',
    eval: (scopeResult: number, parameters: Parameter[]) => {
        let result = 1;
        for (let i = scopeResult; i > 0; i--) {
            result *= i;
        }
        return {
            type: 'number',
            value: result,
        };
    }
});

functionality.addOperation({
    leftType: 'array',
    rightType: 'array',
    operator: '><',
    eval: (leftResult: IEvalResult[], rightResult: IEvalResult[]) => {
        const result = [];
        for (let a of leftResult) {
            for (let b of rightResult) {
                result.push(a.value + b.value);
            }
        }
        return {
            type: 'array',
            value: result,
        };
    },
});

console.log(evaluateExpression(functionality, `$foo + $bar`));
console.log(evaluateExpression(functionality, `$foo.repeat(5)`));
console.log(evaluateExpression(functionality, `$numbers.split(",")`));
console.log(evaluateExpression(functionality, `['homer', 'marge', 'maggi', 'bart', 'lisa'].join(', ')`));
console.log(evaluateExpression(functionality, `3.factorial`));
console.log(evaluateExpression(functionality, `['a', 'b', 'c'] >< ['x', 'y', 'z']`));

