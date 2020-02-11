import { Lex } from './lex';
import { tryParseExpression } from './parse';
import './syntax-tree/default-functions';
import { IEvalResult } from './syntax-tree/expression';
import { Functionality } from './functionality';

/**
 * Evaluates an custom expression with a given functionality set.
 *
 * @export
 * @param {Functionality} functionality
 * @param {string} code
 * @returns {*}
 */
export function evaluateExpression(functionality: Functionality, code: string): any {
    const result = evaluateExpressionWithType(functionality, code);
    return deType(result);
}

function deType(result: IEvalResult | null): any {
    if (result?.type !== 'array') return result ? result.value : null;
    const deTypeArray: (IEvalResult | null)[] = result.value;
    return deTypeArray.map(x => deType(x));
}

/**
 * Like @see{evaluateExpression}, but returns, type, value tuple.
 *
 * @export
 * @param {Functionality} functionality
 * @param {string} code
 * @returns {(IEvalResult | null)}
 */
export function evaluateExpressionWithType(functionality: Functionality, code: string): IEvalResult | null {
    const tokens = Lex(code);
    const syntaxTree = tryParseExpression(0, tokens);
    if (syntaxTree !== null) {
        return syntaxTree.result.eval(functionality);
    }
    return null;
}

export { Functionality };
export { IEvalResult } from './syntax-tree/expression';
export { Parameter } from './syntax-tree/parameter';
