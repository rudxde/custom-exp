import { Expression, IEvalResult } from './Expression';
import { Functionality } from '../functionality';
export declare class Condition extends Expression {
    condition: Expression;
    thenEx: Expression;
    elseEx: Expression;
    constructor(condition: Expression, thenEx: Expression, elseEx: Expression);
    eval(functionality: Functionality): IEvalResult;
}
