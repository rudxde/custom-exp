import { Function } from '../../Function';
import { Parameter } from '../../Parameter';
import { IEvalResult } from '../../Expression';

Function.functions.push({
    name: 'toStringArray',
    scopeType: 'array',
    eval: (scope: IEvalResult[], parameters: Parameter[]) => {
        return {
            type: 'array',
            value: scope.map(element => {
                const convertFn = Function.functions.find(x => x.name === 'toString' && x.scopeType === element.type);
                if (!convertFn) throw new Error(`Function 'toString' not found for type ${element.type}`);
                return convertFn.eval(element.value, []);
            })
        };
    }
});
Function.functions.push({
    name: 'toString',
    scopeType: 'array',
    eval: (scope: IEvalResult[], parameters: Parameter[]) => {
        return {
            type: 'array',
            value: '[' + scope.map(element => {
                const convertFn = Function.functions.find(x => x.name === 'toString' && x.scopeType === element.type);
                if (!convertFn) throw new Error(`Function 'toString' not found for type ${element.type}`);
                return convertFn.eval(element.value, []).value;
            }).join(', ') + ']'
        };
    }
});
Function.functions.push({
    name: 'join',
    scopeType: 'array',
    eval: (scope: IEvalResult[], parameters: Parameter[]) => {
        const separator = parameters[0].expression.eval();
        if (separator.type !== 'string') throw new Error('Wrong type for parameter separator of join. Expected string but got ' + separator.type);
        return {
            type: 'string',
            value: scope.map(element => {
                const convertFn = Function.functions.find(x => x.name === 'toString' && x.scopeType === element.type);
                if (!convertFn) throw new Error(`Function 'toString' not found for type ${element.type}`);
                return convertFn.eval(element.value, []).value;
            }).join(separator.value),
        };
    }
});
Function.functions.push({
    name: 'get',
    scopeType: 'array',
    eval: (scope: IEvalResult[], parameters: Parameter[]) => {
        const index = parameters[0].expression.eval();
        if (index.type !== 'number') throw new Error('Wrong type for parameter index of get. Expected number but got ' + index.type);
        if (scope.length <= index.value) throw new Error(`Index out of bound! (${index.value}/${scope.length - 1})`);
        return { type: scope[index.value].type, value: scope[index.value].value };
    }
});

