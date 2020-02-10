import { Expression, IEvalResult } from './expression';
import { Functionality } from '../functionality';

export class Condition extends Expression {

    constructor(
        public condition: Expression,
        public thenEx: Expression,
        public elseEx: Expression,
    ) {
        super();
    }
    eval(functionality: Functionality): IEvalResult {
        const evalConditionResult = this.condition.eval(functionality);
        let result: boolean = evalConditionResult.value;
        if (evalConditionResult.type !== 'boolean') {
            result = Boolean(evalConditionResult.value);
        }
        if (result) {
            return this.thenEx.eval(functionality);
        } else {
            return this.elseEx.eval(functionality);
        }
    }
}
