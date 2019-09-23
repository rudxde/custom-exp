import { Expression, IEvalResult } from './Expression';
import { Functionality } from '../functionality';

export class Field extends Expression {
    constructor(
        public name: string,
    ) {
        super();
    }
    eval(functionality: Functionality): IEvalResult {
        const fn = functionality.fields.find(x => x.name === this.name);
        if (!fn) throw new Error(`No Field with identifier '${this.name}' found.`);
        const result = fn.eval();
        return {
            type: result.type,
            value: result.value,
        };
    }
}
