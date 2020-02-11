import { Functionality, evaluateExpression, Parameter, IEvalResult } from '../src';

describe('Custom-exp', () => {
    let functionality: Functionality;
    beforeAll(() => {
        functionality = new Functionality();
    });

    describe('evaluate math', () => {
        [
            { code: '15', result: 15 },
            { code: '          15   ', result: 15 },
            { code: '(15)', result: 15 },
            { code: '(((15)))', result: 15 },
            { code: '0', result: 0 },
            { code: '1.9', result: 1.9 },
            { code: '0xFF', result: 0xFF },
            { code: '0x0', result: 0 },
            { code: '0b0', result: 0 },
            { code: '0b110', result: 6 },
            { code: '0b1', result: 1 },
            { code: '1+0', result: 1 },
            { code: '0+0', result: 0 },
            { code: '1-1', result: 0 },
            { code: '100+1', result: 101 },
            { code: '0x5+10', result: 15 },
            { code: '1*1', result: 1 },
            { code: '1/1', result: 1 },
            { code: '123*534', result: 123 * 534 },
            { code: '0b10*0b10', result: 4 },
            { code: '1/0', result: Infinity },
            { code: '5%3', result: 2 },
            { code: '19%19', result: 0 },
            { code: '19 == 19', result: true },
            { code: '1 == 5', result: false },
            { code: '4 != 3', result: true },
            { code: '4 != 4', result: false },
            { code: '4 < 5', result: true },
            { code: '6 > 5', result: true },
            { code: '9 < 5', result: false },
            { code: '3 > 5', result: false },
            { code: '4 <= 4', result: true },
            { code: '4 >= 4', result: true },
            { code: '4 <= 5', result: true },
            { code: '4 >= 3', result: true },
            { code: '4 <= 3', result: false },
            { code: '4 >= 5', result: false },
            { code: '2^4', result: Math.pow(2, 4) },
            { code: '1.15.round', result: 1 },
            { code: '4.sqrt', result: 2 },
            { code: '4.toString', result: '4' },
        ].forEach(x =>
            it(`should evaluate '${x.code}' to ${x.result}`, () => {
                const result = evaluateExpression(functionality, x.code);
                expect(result).toBe(x.result);
            }),
        );
    });
    describe('evaluate strings', () => {
        [
            { code: `''`, result: '' },
            { code: `'foo'`, result: 'foo' },
            { code: `'FOO'`, result: 'FOO' },
            { code: `"foo"`, result: 'foo' },
            { code: ` 'foo'`, result: 'foo' },
            { code: `('foo')`, result: 'foo' },
            { code: `'foo' + 'bar'`, result: 'foobar' },
            { code: `'foo' + 1`, result: 'foo1' },
            { code: `1 + 'foo'`, result: '1foo' },
            { code: `'foo' + 'bar' + 'custom' + 'exp'`, result: 'foobarcustomexp' },
            { code: `'foo' == 'foo'`, result: true },
            { code: `'foo' != 'foo'`, result: false },
            { code: `'foo' == 'bar'`, result: false },
            { code: `'foo' != 'bar'`, result: true },
            { code: `'foo'.repeat(3)`, result: 'foofoofoo' },
            { code: `'foo'.toString()`, result: 'foo' },
            { code: `'foo'.charAt(1)`, result: 'o' },
            { code: `'foo'.subString(1,2)`, result: 'o' },
            { code: `'foo'.toUpperCase`, result: 'FOO' },
            { code: `'FOO'.toLowerCase`, result: 'foo' },
            { code: `'FOO'.toLowerCase()`, result: 'foo' },
            { code: `'FOO'.isEmpty`, result: false },
            { code: `'33'.parseInt`, result: 33 },
            { code: `'foo'.length`, result: 3 },
            { code: `'foo'.indexOf('oo')`, result: 1 },
        ].forEach(x =>
            it(`should evaluate '${x.code}' to ${x.result}`, () => {
                const result = evaluateExpression(functionality, x.code);
                expect(result).toEqual(x.result);
            }),
        );
    });

    describe('evaluate bools', () => {
        [
            { code: `true`, result: true },
            { code: `false`, result: false },
            { code: `true && true`, result: true },
            { code: `true || true`, result: true },
            { code: `false || true`, result: true },
            { code: `false ^ true`, result: true },
            { code: `false ^ false`, result: false },
            { code: `false -> true`, result: true },
            { code: `false -> false`, result: true },
            { code: `true -> false`, result: false },
            { code: `true -> true`, result: true },

        ].forEach(x =>
            it(`should evaluate '${x.code}' to ${x.result}`, () => {
                const result = evaluateExpression(functionality, x.code);
                expect(result).toEqual(x.result);
            }),
        );
    });
    describe('evaluate arrays', () => {
        [
            { code: `[]`, result: [] },
            { code: `[1]`, result: [1] },
            { code: `([1])`, result: [1] },
            { code: `[1,2]`, result: [1, 2] },
            { code: `[1,2] + [3,4]`, result: [1, 2, 3, 4] },
            { code: `[1,2] < [3,4,5]`, result: true },
            { code: `[1,2] > [3,4,5]`, result: false },
            { code: `[5,2,11,100,3].sort`, result: [100, 11, 5, 3, 2] },
            { code: `[5,2,11,100,3].sort('desc')`, result: [2, 3, 5, 11, 100] },
            { code: `['a','b','c']`, result: ['a', 'b', 'c'] },
            { code: `['a','b','c'].reverse`, result: ['c', 'b', 'a'] },
            { code: `['a','b','c'].get(1)`, result: 'b' },
            { code: `['a','b','c'].length`, result: 3 },
            { code: `[0, 1, 2, 3, 4, 5, 6].slice(2,4)`, result: [2, 3] },
            { code: `['f','o','o'].join('')`, result: 'foo' },
        ].forEach(x =>
            it(`should evaluate '${x.code}' to ${x.result}`, () => {
                const result = evaluateExpression(functionality, x.code);
                expect(result).toEqual(x.result);
            }),
        );
    });

    describe('extend functionality', () => {
        it('should be possible to create a new field', () => {
            functionality.addField({
                name: 'foo',
                eval: () => ({
                    value: 'FOO',
                    type: 'string'
                }),
            });
            const result = evaluateExpression(functionality, `$foo`);
            expect(result).toEqual('FOO');
        });
        it('should be possible to create another new field', () => {
            functionality.addField({
                name: 'bar',
                eval: () => ({
                    value: 'BAR',
                    type: 'string'
                }),
            });
            const result = evaluateExpression(functionality, `$foo + $bar`);
            expect(result).toEqual('FOOBAR');
        });
        it('should be possible to create a new function', () => {
            functionality.addFunctions({
                scopeType: 'number',
                name: 'factorial',
                eval: (scopeResult: number, parameters: Parameter[]) => {
                    let result = 1;
                    for (let i = scopeResult; i > 0; i--) {
                        result *= i;
                    }
                    return {
                        type: 'number',
                        value: result,
                    };
                }
            });
            const result = evaluateExpression(functionality, `3.factorial`);
            expect(result).toEqual(6);
        });
        it('should be possible to create a new operation', () => {
            functionality.addOperation({
                leftType: 'array',
                rightType: 'array',
                operator: '><',
                eval: (leftResult: IEvalResult[], rightResult: IEvalResult[]) => {
                    const result = [];
                    for (let a of leftResult) {
                        for (let b of rightResult) {
                            result.push(functionality.getOperation(a.type, b.type, '+').eval(a.value, b.value));
                        }
                    }
                    return {
                        type: 'array',
                        value: result,
                    };
                },
            });
            const result = evaluateExpression(functionality, `['a', 'b', 'c'] >< ['x', 'y', 'z']`);
            expect(result).toEqual([
                'ax', 'ay', 'az',
                'bx', 'by', 'bz',
                'cx', 'cy', 'cz',
            ]);
        });
    });
});
