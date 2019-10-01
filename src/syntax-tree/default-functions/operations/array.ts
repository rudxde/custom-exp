import { Functionality } from '../../..';
import { IEvalResult } from '../../Expression';

export function addDefaults(functionality: Functionality): void {
    // concat array
    functionality.addOperation({
        leftType: 'array',
        rightType: 'array',
        operator: '+',
        eval: (left: IEvalResult[], right: IEvalResult[]) => {
            return {
                type: 'array',
                value: [
                    ...left,
                    ...right,
                ]
            };
        }
    });
    functionality.addOperation({
        leftType: 'array',
        rightType: 'array',
        operator: '<',
        eval: (left, right) => functionality.getOperation('number', 'number', '<').eval(left.length, right.length),
    });
    functionality.addOperation({
        leftType: 'array',
        rightType: 'array',
        operator: '>',
        eval: (left, right) => functionality.getOperation('number', 'number', '>').eval(left.length, right.length),
    });
}
