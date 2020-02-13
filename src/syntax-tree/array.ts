import { Expression, IEvalResult } from './expression';
import { Functionality } from '../functionality';

export class Array extends Expression {
    constructor(
        public expressions: Expression[],
    ) {
        super();
    }
    eval(functionality: Functionality): IEvalResult {
        return {
            type: 'array',
            value: this.expressions.map(x => x.eval(functionality)),
        };
    }
}
