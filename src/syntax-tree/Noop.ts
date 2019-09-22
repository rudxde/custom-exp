import { Expression, IEvalResult } from './Expression';

export class Noop extends Expression {
    constructor() {
        super();
    }
    eval(): IEvalResult {
        return {
            type: 'never',
            value: undefined,
        };
    }
}
