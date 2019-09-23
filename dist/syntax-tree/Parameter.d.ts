import { Expression, IEvalResult } from './Expression';
import { Functionality } from '../functionality';
export declare class Parameter {
    expression: Expression;
    constructor(expression: Expression);
    static getParam(functionality: Functionality, parameters: Parameter[], index: number, name: string, type?: string): IEvalResult;
}
