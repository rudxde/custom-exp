import { Parameter } from '../../parameter';
import { IEvalResult } from '../../expression';
import { Functionality } from '../../../functionality';

export function addDefaults(functionality: Functionality): void {

    functionality.addFunctions({
        name: 'toStringArray',
        scopeType: 'array',
        eval: (scope: IEvalResult[], parameters: Parameter[]) => {
            return {
                type: 'array',
                value: scope.map(element => {
                    const convertFn = functionality.functions.find(x => x.name === 'toString' && x.scopeType === element.type);
                    if (!convertFn) throw new Error(`Function 'toString' not found for type ${element.type}`);
                    return convertFn.eval(element.value, []);
                })
            };
        }
    });
    functionality.addFunctions({
        name: 'toString',
        scopeType: 'array',
        eval: (scope: IEvalResult[], parameters: Parameter[]) => {
            return {
                type: 'array',
                value: '[' + scope.map(element => {
                    const convertFn = functionality.functions.find(x => x.name === 'toString' && x.scopeType === element.type);
                    if (!convertFn) throw new Error(`Function 'toString' not found for type ${element.type}`);
                    return convertFn.eval(element.value, []).value;
                }).join(', ') + ']'
            };
        }
    });
    functionality.addFunctions({
        name: 'join',
        scopeType: 'array',
        eval: (scope: IEvalResult[], parameters: Parameter[]) => {
            const separator = parameters[0].expression.eval(functionality);
            if (separator.type !== 'string') throw new Error('Wrong type for parameter separator of join. Expected string but got ' + separator.type);
            return {
                type: 'string',
                value: scope.map(element => {
                    const convertFn = functionality.functions.find(x => x.name === 'toString' && x.scopeType === element.type);
                    if (!convertFn) throw new Error(`Function 'toString' not found for type ${element.type}`);
                    return convertFn.eval(element.value, []).value;
                }).join(separator.value),
            };
        }
    });
    functionality.addFunctions({
        name: 'get',
        scopeType: 'array',
        eval: (scope: IEvalResult[], parameters: Parameter[]) => {
            const index = parameters[0].expression.eval(functionality);
            if (index.type !== 'number') throw new Error('Wrong type for parameter index of get. Expected number but got ' + index.type);
            if (scope.length <= index.value) throw new Error(`Index out of bound! (${index.value}/${scope.length - 1})`);
            return { type: scope[index.value].type, value: scope[index.value].value };
        }
    });
    functionality.addFunctions({
        name: 'length',
        scopeType: 'array',
        eval: (scope: IEvalResult[], parameters: Parameter[]) => {
            return { type: 'number', value: scope.length };
        }
    });
    functionality.addFunctions({
        name: 'reverse',
        scopeType: 'array',
        eval: (scope: IEvalResult[], parameters: Parameter[]) => {
            return { type: 'array', value: scope.reverse };
        }
    });
    functionality.addFunctions({
        name: 'slice',
        scopeType: 'array',
        eval: (scope: IEvalResult[], parameters: Parameter[]) => {
            const start = Parameter.getParam(functionality, parameters, 0, 'start', 'number').value;
            const end = Parameter.getParam(functionality, parameters, 1, 'end', 'number').value;
            return { type: 'number', value: scope.slice(start, end) };
        }
    });
    functionality.addFunctions({
        name: 'toGenericArray',
        scopeType: 'array',
        eval: (scope: IEvalResult[], parameters: Parameter[]) => ({ type: 'genericArray', value: scope.map(x => x.value) }),
    });
    functionality.addFunctions({
        name: 'sort',
        scopeType: 'array',
        eval: (scope: IEvalResult[], parameters: Parameter[]) => {
            const order = (Parameter.getOptionalParam(functionality, parameters, 0, 'order', 'string') || { type: 'string', value: 'asc' }).value;
            const orderFactor = order === 'asc' ? 1 : -1;
            const sorted = scope.sort((a, b) => {
                const compareResult = functionality.getOperation(a.type, b.type, '<').eval(a.value, b.value);
                if (compareResult.type === 'boolean') {
                    return (compareResult.value ? 1 : -1) * orderFactor;
                }
                return -1;
            });
            return {
                type: 'array',
                value: sorted,
            };
        },
    });

}
