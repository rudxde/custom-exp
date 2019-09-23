import { Expression, IEvalResult } from './Expression';
export declare class Parameter {
    expression: Expression;
    constructor(expression: Expression);
    static getParam(parameters: Parameter[], index: number, name: string, type?: string): IEvalResult;
}
