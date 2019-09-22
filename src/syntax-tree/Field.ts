import { Expression, IEvalResult } from './Expression';

export class Field extends Expression {
    static functions: { name: string, eval: () => IEvalResult }[] = [];
    constructor(
        public name: string,
    ) {
        super();
    }
    eval(): IEvalResult {
        const fn = Field.functions.find(x => x.name === this.name);
        if (!fn) throw new Error(`No Field with identifier '${this.name}' found.`);
        const result = fn.eval();
        return {
            type: result.type,
            value: result.value,
        };
    }
}
