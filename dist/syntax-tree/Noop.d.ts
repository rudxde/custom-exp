import { Expression, IEvalResult } from './Expression';
import { Functionality } from '../functionality';
export declare class Noop extends Expression {
    constructor();
    eval(functionality: Functionality): IEvalResult;
}
