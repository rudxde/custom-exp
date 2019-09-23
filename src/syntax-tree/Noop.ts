import { Expression, IEvalResult } from './Expression';
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
