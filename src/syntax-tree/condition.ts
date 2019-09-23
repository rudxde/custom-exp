import { Expression, IEvalResult } from './Expression';

export class Condition extends Expression {

    constructor(
        public condition: Expression,
        public thenEx: Expression,
        public elseEx: Expression,
    ) {
        super();
    }
    eval(): IEvalResult {
        const evalConditionResult = this.condition.eval();
        let result: boolean = evalConditionResult.value;
        if (evalConditionResult.type !== 'boolean') {
            result = Boolean(evalConditionResult.value);
        }
        if (result) {
            return this.thenEx.eval();
        } else {
            return this.elseEx.eval();
        }
    }
}
