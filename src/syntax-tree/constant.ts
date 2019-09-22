import { Expression, IEvalResult } from './Expression';

export class NumberConstant extends Expression {
    constructor(
        public value: number,
    ) {
        super();
    }
    eval(): IEvalResult {
        return {
            type: 'number',
            value: this.value
        };
    }
}
export class StringConstant extends Expression {
    constructor(
        public value: string,
    ) {
        super();
    }
    eval(): IEvalResult {
        return {
            type: 'string',
            value: this.value
        };
    }
}
export class BooleanConstant extends Expression {
    constructor(
        public value: boolean,
    ) {
        super();
    }
    eval(): IEvalResult {
        return {
            type: 'boolean',
            value: this.value
        };
    }
}
