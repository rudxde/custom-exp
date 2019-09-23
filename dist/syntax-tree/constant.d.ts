import { Expression, IEvalResult } from './Expression';
import { Functionality } from '../functionality';
export declare class NumberConstant extends Expression {
    value: number;
    constructor(value: number);
    eval(functionality: Functionality): IEvalResult;
}
export declare class StringConstant extends Expression {
    value: string;
    constructor(value: string);
    eval(functionality: Functionality): IEvalResult;
}
export declare class BooleanConstant extends Expression {
    value: boolean;
    constructor(value: boolean);
    eval(functionality: Functionality): IEvalResult;
}
