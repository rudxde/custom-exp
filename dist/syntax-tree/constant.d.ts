import { Expression, IEvalResult } from './Expression';
export declare class NumberConstant extends Expression {
    value: number;
    constructor(value: number);
    eval(): IEvalResult;
}
export declare class StringConstant extends Expression {
    value: string;
    constructor(value: string);
    eval(): IEvalResult;
}
export declare class BooleanConstant extends Expression {
    value: boolean;
    constructor(value: boolean);
    eval(): IEvalResult;
}
