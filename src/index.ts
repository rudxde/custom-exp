import { Lex } from './lex';
import { tryParseExpression } from './parse';
import './syntax-tree/default-functions';

export function evaluateExpression(code: string): any {
    const syntaxTree = tryParseExpression(0, Lex(code));
    if (syntaxTree !== null) {
        return syntaxTree.result;
    }
    return null;
}
