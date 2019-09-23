import { Expression, IEvalResult } from './Expression';
import { Functionality } from '../functionality';
export declare class Field extends Expression {
    name: string;
    constructor(name: string);
    eval(functionality: Functionality): IEvalResult;
}
