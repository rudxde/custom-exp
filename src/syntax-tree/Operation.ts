import { Expression, IEvalResult } from './Expression';
export type Operator = '+' | '-' | '*' | '/' | '%' | '<' | '>' | '&&' | '||' | '^' | ',' | '==' | '!=';
export class Operation extends Expression {
    static functions: { leftType: string, rightType: string, operator: Operator, eval: (leftResult: any, rightResult: any) => IEvalResult }[] = [];
    constructor(
        public left: Expression,
        public right: Expression,
        public operator: Operator,
    ) {
        super();
    }
    eval(): IEvalResult {
        const leftResult = this.left.eval();
        const rightResult = this.right.eval();
        const left = leftResult.value;
        let right = rightResult.value;
        const fn = Operation.functions.find(x => x.leftType === leftResult.type && x.rightType === rightResult.type && x.operator === this.operator);
        if (!fn) throw new Error(`No function found for operator '${this.operator}' for types '${leftResult.type}'X'${rightResult.type}'`);
        const result = fn.eval(left, right);
        return {
            type: result.type,
            value: result.value,
        };
    }
}

