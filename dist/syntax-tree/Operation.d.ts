import { Expression, IEvalResult } from './Expression';
import { Functionality } from '../functionality';
export declare type Operator = '+' | '-' | '*' | '/' | '%' | '<' | '>' | '&&' | '||' | '^' | ',' | '==' | '!=';
export declare class Operation extends Expression {
    left: Expression;
    right: Expression;
    operator: Operator;
    constructor(left: Expression, right: Expression, operator: Operator);
    eval(functionality: Functionality): IEvalResult;
}
