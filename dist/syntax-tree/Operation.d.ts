import { Expression, IEvalResult } from './Expression';
import { Functionality } from '../functionality';
import { Operators } from './Operators';
export declare class Operation extends Expression {
    left: Expression;
    right: Expression;
    operator: Operators;
    constructor(left: Expression, right: Expression, operator: Operators);
    eval(functionality: Functionality): IEvalResult;
}
