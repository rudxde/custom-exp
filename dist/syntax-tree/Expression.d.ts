export declare abstract class Expression {
    constructor();
    abstract eval(): IEvalResult;
}
export interface IEvalResult {
    type: string;
    value: any;
}
