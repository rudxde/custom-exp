import { Expression, IEvalResult } from './Expression';
import { Functionality } from '../functionality';

export class Field extends Expression {
    constructor(
        public name: string,
    ) {
        super();
    }
    eval(functionality: Functionality): IEvalResult {
        const fn = functionality.getField(this.name);
        const result = fn.eval();
        return {
            type: result.type,
            value: result.value,
        };
    }
}
