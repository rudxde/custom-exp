import { Expression, IEvalResult } from './expression';
import { Functionality } from '../functionality';

export class Noop extends Expression {
    constructor() {
        super();
    }
    eval(functionality: Functionality): IEvalResult {
        return {
            type: 'never',
            value: undefined,
        };
    }
}
