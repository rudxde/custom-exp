import { Expression, IEvalResult } from './Expression';
import { Functionality } from '../functionality';
export declare class Array extends Expression {
    expressions: Expression[];
    constructor(expressions: Expression[]);
    eval(functionality: Functionality): IEvalResult;
}
