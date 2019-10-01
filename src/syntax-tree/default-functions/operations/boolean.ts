import { Functionality } from '../../../functionality';
export function addDefaults(functionality: Functionality): void {

    // and
    functionality.addOperation({
        leftType: 'boolean',
        rightType: 'boolean',
        operator: '&&',
        eval: (left: boolean, right: boolean) => {
            return { type: 'boolean', value: left && right };
        },
    });
    // or
    functionality.addOperation({
        leftType: 'boolean',
        rightType: 'boolean',
        operator: '||',
        eval: (left: boolean, right: boolean) => {
            return { type: 'boolean', value: left || right };
        },
    });
    // implication
    functionality.addOperation({
        leftType: 'boolean',
        rightType: 'boolean',
        operator: '->',
        eval: (left: boolean, right: boolean) => {
            return { type: 'boolean', value: (left && right) || !left };
        },
    });
    //xor
    functionality.addOperation({
        leftType: 'boolean',
        rightType: 'boolean',
        operator: '^',
        eval: (left: boolean, right: boolean) => {
            return { type: 'boolean', value: (left && !right) || (!left && right) };
        },
    });

    functionality.addOperation({
        leftType: 'boolean',
        rightType: 'boolean',
        operator: '==',
        eval: (left, right) => ({ type: 'boolean', value: left === right }),
    });
    functionality.addOperation({
        leftType: 'boolean',
        rightType: 'boolean',
        operator: '!=',
        eval: (left, right) => ({ type: 'boolean', value: left !== right }),
    });
    functionality.addOperation({
        leftType: 'boolean',
        rightType: 'boolean',
        operator: '<',
        eval: (left, right) => ({ type: 'boolean', value: !left && right }),
    });
    functionality.addOperation({
        leftType: 'boolean',
        rightType: 'boolean',
        operator: '>',
        eval: (left, right) => ({ type: 'boolean', value: left && !right }),
    });
    functionality.addOperation({
        leftType: 'boolean',
        rightType: 'boolean',
        operator: '°°',
        eval: (left, right) => ({ type: 'string', value: '(◉ܫ◉)' }),
    });
}
