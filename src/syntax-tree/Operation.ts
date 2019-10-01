import { Expression, IEvalResult } from './Expression';
import { Functionality } from '../functionality';
import { Operators } from './Operators';
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
        let right = rightResult.value;
        const fn = functionality.getOperation(leftResult.type,  rightResult.type, this.operator);
        const result = fn.eval(left, right);
        return {
            type: result.type,
            value: result.value,
        };
    }
}

