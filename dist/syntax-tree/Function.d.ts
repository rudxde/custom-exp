import { Expression, IEvalResult } from './Expression';
import { Parameter } from './Parameter';
import { Functionality } from '../functionality';
export declare class Function extends Expression {
    scope: Expression;
    name: String;
    parameter: Parameter[];
    constructor(scope: Expression, name: String, parameter: Parameter[]);
    eval(functionality: Functionality): IEvalResult;
}
