import { Expression, IEvalResult } from './Expression';
export declare class Noop extends Expression {
    constructor();
    eval(): IEvalResult;
}
