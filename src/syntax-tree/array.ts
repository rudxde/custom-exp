import { Expression, IEvalResult } from './Expression';

export class Array extends Expression {
    constructor(
        public expressions: Expression[],
    ) {
        super();
    }
    eval(): IEvalResult {
        return {
            type: 'array',
            value: this.expressions.map(x => x.eval())
        };
    }
}
