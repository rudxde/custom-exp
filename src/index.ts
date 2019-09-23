import { Lex } from './lex';
import { tryParseExpression } from './parse';
import './syntax-tree/default-functions';
import { IEvalResult } from './syntax-tree/Expression';

export function evaluateExpression(code: string): any {
    const result = evaluateExpressionWithType(code);
    return result ? result.value : null;
}
export function evaluateExpressionWithType(code: string): IEvalResult | null {
    const tokens = Lex(code);
    const syntaxTree = tryParseExpression(0, tokens);
    if (syntaxTree !== null) {
        return syntaxTree.result.eval();
    }
    return null;
}

