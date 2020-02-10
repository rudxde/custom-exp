import { Expression, IEvalResult } from './expression';
import { Functionality } from '../functionality';
import { Operators } from './operators';
export class Operation extends Expression {
    constructor(
        public left: Expression,
        public right: Expression,
        public operator: Operators,
    ) {
        super();
    }
    eval(functionality: Functionality): IEvalResult {
        const leftResult = this.left.eval(functionality);
        const rightResult = this.right.eval(functionality);
        const left = leftResult.value;
        const right = rightResult.value;
        const fn = functionality.getOperation(leftResult.type,  rightResult.type, this.operator);
        const result = fn.eval(left, right);
        return {
            type: result.type,
            value: result.value,
        };
    }
}

