import { Expression, IEvalResult } from './Expression';
export declare class Condition extends Expression {
    condition: Expression;
    thenEx: Expression;
    elseEx: Expression;
    constructor(condition: Expression, thenEx: Expression, elseEx: Expression);
    eval(): IEvalResult;
}
