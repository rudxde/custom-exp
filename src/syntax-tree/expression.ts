import { Functionality } from '../functionality';

export abstract class Expression {
    constructor(

    ) { }

    abstract eval(functionality: Functionality): IEvalResult;
}

export interface IEvalResult {
    type: string;
    value: any;
}
