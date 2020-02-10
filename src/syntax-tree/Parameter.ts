import { Expression, IEvalResult } from './expression';
import { Functionality } from '../functionality';

export class Parameter {

    constructor(
        public expression: Expression
    ) {

    }

    public static getParam(functionality: Functionality, parameters: Parameter[], index: number, name: string, type?: string): IEvalResult {
        if (parameters.length <= index) throw new Error(`No parameter '${name} provided!`);
        const evaluated = parameters[index].expression.eval(functionality);
        if (type && evaluated.type !== type) throw new Error(`Wrong type for Parameter '${name} expected '${type}', but got '${evaluated.type}'`);
        return evaluated;
    }
    public static getOptionalParam(functionality: Functionality, parameters: Parameter[], index: number, name: string, type?: string): IEvalResult | undefined {
        if (parameters.length <= index) return undefined;
        const evaluated = parameters[index].expression.eval(functionality);
        if (type && evaluated.type !== type) throw new Error(`Wrong type for Parameter '${name} expected '${type}', but got '${evaluated.type}'`);
        return evaluated;
    }
}
