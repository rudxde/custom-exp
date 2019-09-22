import { Expression, IEvalResult } from './Expression';
export declare type Operator = '+' | '-' | '*' | '/' | '%' | '<' | '>' | '&&' | '||' | '^' | ',';
export declare class Operation extends Expression {
    left: Expression;
    right: Expression;
    operator: Operator;
    static functions: {
        leftType: string;
        rightType: string;
        operator: Operator;
        eval: (leftResult: any, rightResult: any) => IEvalResult;
    }[];
    constructor(left: Expression, right: Expression, operator: Operator);
    eval(): IEvalResult;
}
