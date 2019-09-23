import { Expression, IEvalResult } from './Expression';

export class Parameter {

    constructor(
        public expression: Expression
    ) {

    }

    public static getParam(parameters: Parameter[], index: number, name: string, type?: string): IEvalResult {
        if (parameters.length <= index) throw new Error(`No parameter '${name} provided!`);
        const evaluated = parameters[index].expression.eval();
        if (type && evaluated.type !== type) throw new Error(`Wring type for Parameter '${name} expected '${type}', but got '${evaluated.type}'`);
        return evaluated;
    }
}
