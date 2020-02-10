import { Lex } from './lex';
import { tryParseExpression } from './parse';
import './syntax-tree/default-functions';
import { IEvalResult } from './syntax-tree/expression';
import { Functionality } from './functionality';

export function evaluateExpression(functionality: Functionality, code: string): any {
    const result = evaluateExpressionWithType(functionality, code);
    return result ? result.value : null;
}
export function evaluateExpressionWithType(functionality: Functionality, code: string): IEvalResult | null {
    const tokens = Lex(code);
    const syntaxTree = tryParseExpression(0, tokens);
    if (syntaxTree !== null) {
        return syntaxTree.result.eval(functionality);
    }
    return null;
}

export { Functionality };
