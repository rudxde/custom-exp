import { Functionality } from '../functionality';
export declare abstract class Expression {
    constructor();
    abstract eval(functionality: Functionality): IEvalResult;
}
export interface IEvalResult {
    type: string;
    value: any;
}
