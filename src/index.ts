import { Lex } from './lex';
import { tryParseExpression } from './parse';
import './syntax-tree/default-functions';

export function evaluateExpression(code: string): any {
    const tokens = Lex(code);
    const syntaxTree = tryParseExpression(0, tokens);
    if (syntaxTree !== null) {
        return syntaxTree.result.eval().value;
    }
    return null;
}