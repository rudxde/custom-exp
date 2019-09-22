import { Expression, IEvalResult } from './Expression';
import { Parameter } from './Parameter';

export class Function extends Expression {

    static functions: { name: string, scopeType: string, eval: (scopeResult: any, parameters: Parameter[]) => IEvalResult }[] = [];

    constructor(
        public scope: Expression,
        public name: String,
        public parameter: Parameter[],
    ) {
        super();
    }
    eval(): IEvalResult {
        const scopeResult = this.scope.eval();
        const fn = Function.functions.find(x => x.name === this.name && x.scopeType === scopeResult.type);
        if (!fn) throw new Error(`Function ${this.name} not found for type ${scopeResult.type}`);
        const result = fn.eval(scopeResult.value, this.parameter);
        return {
            type: result.type,
            value: result.value,
        };
    }
}
