import { Expression, IEvalResult } from './Expression';
import { Parameter } from './Parameter';
import { Functionality } from '../functionality';

export class Function extends Expression {

    constructor(
        public scope: Expression,
        public name: String,
        public parameter: Parameter[],
    ) {
        super();
    }
    eval(functionality: Functionality): IEvalResult {
        const scopeResult = this.scope.eval(functionality);
        const fn = functionality.functions.find(x => x.name === this.name && x.scopeType === scopeResult.type);
        if (!fn) throw new Error(`Function ${this.name} not found for type ${scopeResult.type}`);
        const result = fn.eval(scopeResult.value, this.parameter);
        return {
            type: result.type,
            value: result.value,
        };
    }
}
