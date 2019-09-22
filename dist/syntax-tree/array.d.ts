import { Expression, IEvalResult } from './Expression';
export declare class Array extends Expression {
    expressions: Expression[];
    constructor(expressions: Expression[]);
    eval(): IEvalResult;
}
