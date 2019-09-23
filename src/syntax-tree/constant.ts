import { Expression, IEvalResult } from './Expression';
import { Functionality } from '../functionality';

export class NumberConstant extends Expression {
    constructor(
        public value: number,
    ) {
        super();
    }
    eval(functionality: Functionality): IEvalResult {
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
    eval(functionality: Functionality): IEvalResult {
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
    eval(functionality: Functionality): IEvalResult {
        return {
            type: 'boolean',
            value: this.value
        };
    }
}
