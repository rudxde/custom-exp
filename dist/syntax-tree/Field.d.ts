import { Expression, IEvalResult } from './Expression';
export declare class Field extends Expression {
    name: string;
    static functions: {
        name: string;
        eval: () => IEvalResult;
    }[];
    constructor(name: string);
    eval(): IEvalResult;
}
