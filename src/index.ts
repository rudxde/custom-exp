import { Lex } from './lex';
import { tryParseExpression } from './parse';
import './syntax-tree/default-functions';
import { IEvalResult } from './syntax-tree/Expression';
import { Functionality } from './functionality';
import { Type } from './type';

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


// console.log(evaluateExpression(new Functionality(), '[1.2]'));


console.log(Type.parseType('(a|b,array[c,d])'));
