import { Expression, IEvalResult } from './Expression';
import { Functionality } from '../functionality';
export type Operator = '+' | '-' | '*' | '/' | '%' | '<' | '>' | '&&' | '||' | '^' | ',' | '==' | '!=';
export class Operation extends Expression {
    constructor(
        public left: Expression,
        public right: Expression,
        public operator: Operator,
    ) {
        super();
    }
    eval(functionality: Functionality): IEvalResult {
        const leftResult = this.left.eval(functionality);
        const rightResult = this.right.eval(functionality);
        const left = leftResult.value;
        let right = rightResult.value;
        const fn = functionality.operations.find(x => x.leftType === leftResult.type && x.rightType === rightResult.type && x.operator === this.operator);
        if (!fn) throw new Error(`No function found for operator '${this.operator}' for types '${leftResult.type}'X'${rightResult.type}'`);
        const result = fn.eval(left, right);
        return {
            type: result.type,
            value: result.value,
        };
    }
}

