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
}
