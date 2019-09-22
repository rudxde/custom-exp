import { Expression, IEvalResult } from './Expression';
import { Parameter } from './Parameter';
export declare class Function extends Expression {
    scope: Expression;
    name: String;
    parameter: Parameter[];
    static functions: {
        name: string;
        scopeType: string;
        eval: (scopeResult: any, parameters: Parameter[]) => IEvalResult;
    }[];
    constructor(scope: Expression, name: String, parameter: Parameter[]);
    eval(): IEvalResult;
}
