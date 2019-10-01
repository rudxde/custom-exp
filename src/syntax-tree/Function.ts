import { Expression, IEvalResult } from './Expression';
import { Parameter } from './Parameter';
import { Functionality } from '../functionality';

export class Function extends Expression {

    constructor(
        public scope: Expression,
        public name: string,
        public parameter: Parameter[],
    ) {
        super();
    }
    eval(functionality: Functionality): IEvalResult {
        const scopeResult = this.scope.eval(functionality);
        const fn = functionality.getFunction(this.name, scopeResult.type);
        const result = fn.eval(scopeResult.value, this.parameter);
        return {
            type: result.type,
            value: result.value,
        };
    }
}
