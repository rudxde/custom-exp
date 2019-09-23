import { Tokens, Token, TokenTypes } from './lex';
import { Field } from './syntax-tree/Field';
import { Expression } from './syntax-tree/Expression';
import { Function } from './syntax-tree/Function';
import { Parameter } from './syntax-tree/Parameter';
import { Operation, Operator } from './syntax-tree/Operation';
import { Noop } from './syntax-tree/Noop';
import { StringConstant, NumberConstant, BooleanConstant } from './syntax-tree/constant';
import { Array } from './syntax-tree/array';
import { Condition } from './syntax-tree/condition';

type fail = null;
type canFail<T> = fail | ParseResult<T>;

type ParseResult<T> = { result: T, increasedIndex: number };

const FAIL: fail = null;

function expectToken(token: Token, expectedContent: string): boolean {
    return token.content === expectedContent;
}
function expectTokenType(token: Token, expectedType: TokenTypes): boolean {
    return token.type === expectedType;
}


function tryParseSimpleExpression(index: number, tokens: Tokens): canFail<Expression> {
    const braceExpressionResult = tryParseBraceExpression(index, tokens);
    if (braceExpressionResult != FAIL) return braceExpressionResult;
    const arrayExpression = tryParseArray(index, tokens);
    if (arrayExpression != FAIL) return arrayExpression;
    const booleanResult = tryParseBoolean(index, tokens);
    if (booleanResult !== FAIL) return booleanResult;
    const numberResult = tryParseNumber(index, tokens);
    if (numberResult !== FAIL) return numberResult;
    const stringResult = tryParseString(index, tokens);
    if (stringResult !== FAIL) return stringResult;
    const fieldResult = tryParseField(index, tokens);
    if (fieldResult !== FAIL) return fieldResult;
    return FAIL;
}


function tryParseString(index: number, tokens: Tokens): canFail<StringConstant> {
    if (!expectTokenType(tokens[index], 'string')) return FAIL;
    return ({
        increasedIndex: index + 1,
        result: new StringConstant(tokens[index].content),
    });
}
function tryParseNumber(index: number, tokens: Tokens): canFail<NumberConstant> {
    if (!expectTokenType(tokens[index], 'other')) return FAIL;
    const value = tokens[index].content;
    if (Number(value) === NaN) return FAIL;
    return ({
        increasedIndex: index + 1,
        result: new NumberConstant(Number(value)),
    });
}
function tryParseBoolean(index: number, tokens: Tokens): canFail<BooleanConstant> {
    if (!expectTokenType(tokens[index], 'other')) return FAIL;
    if (tokens[index].content !== 'true' && tokens[index].content !== 'false') return FAIL;
    return ({
        increasedIndex: index + 1,
        result: new BooleanConstant(tokens[index].content === 'true' ? true : false),
    });
}

function tryParseField(index: number, tokens: Tokens): canFail<Field> {
    if (index >= tokens.length) return FAIL;
    if (!expectToken(tokens[index++], '$')) return FAIL;
    if (!expectTokenType(tokens[index], 'other')) return FAIL;
    const newField = new Field(tokens[index++].content);
    return { result: newField, increasedIndex: index };
}



function tryParseArray(index: number, tokens: Tokens): canFail<Array> {
    if (index >= tokens.length) return FAIL;
    if (!expectToken(tokens[index++], '[')) return FAIL;
    if (index >= tokens.length) return FAIL;
    const elements: Expression[] = [];
    while (true) {
        const expressionResult = tryParseExpression(index, tokens);
        if (expressionResult === FAIL) return FAIL;
        elements.push(expressionResult.result);
        index = expressionResult.increasedIndex;
        if (index >= tokens.length) return FAIL;
        if (!expectToken(tokens[index], ':')) break;
        index++;
        if (index >= tokens.length) return FAIL;
    }
    if (!expectToken(tokens[index++], ']')) return FAIL;
    return { result: new Array(elements), increasedIndex: index };
}

function tryParseFunction(scope: Expression, index: number, tokens: Tokens): canFail<Function> {
    if (index >= tokens.length) return FAIL;
    if (scope === FAIL) return FAIL;

    if (!expectToken(tokens[index++], '.')) return FAIL;
    if (index >= tokens.length) return FAIL;

    if (!expectTokenType(tokens[index], 'other')) return FAIL;
    const name = tokens[index++].content;
    let parameters: Parameter[] = [];
    if (index < tokens.length && expectToken(tokens[index], '(')) {
        index++;
        while (true) {
            const expressionResult = tryParseExpression(index, tokens);
            if (expressionResult === FAIL) return FAIL;
            parameters.push(new Parameter(expressionResult.result));
            index = expressionResult.increasedIndex;
            if (!expectToken(tokens[index], ':')) break;
            index++;
        }
        if (!expectToken(tokens[index++], ')')) return FAIL;
    }
    const newFunction = new Function(scope, name, parameters);
    return { result: newFunction, increasedIndex: index };
}


function tryParseOperation(left: Expression, index: number, tokens: Tokens): canFail<Operation> {
    if (index >= tokens.length) return FAIL;
    const operatorResult = tryParseOperator(index, tokens);
    if (operatorResult === FAIL) return FAIL;
    index = operatorResult.increasedIndex;
    const operator = operatorResult.result;
    const rightResult = tryParseSimpleExpression(index, tokens);
    if (rightResult === FAIL) return FAIL;
    index = rightResult.increasedIndex;
    const right = rightResult.result;
    const newOperation = new Operation(left, right, operator);
    return { increasedIndex: index, result: newOperation };
}

function tryParseOperator(index: number, tokens: Tokens): canFail<Operator> {
    if (index >= tokens.length) return FAIL;
    if (!expectTokenType(tokens[index], 'control') && !expectTokenType(tokens[index], 'equals')) return FAIL;
    const nextToken = tokens[index++].content;
    if (index >= tokens.length) return FAIL;
    const overNextToken = tokens[index].content;
    const singleTokenOperators = ['+', '-', '*', '/', '%', '<', '>', '^', ',', '=='];
    const dualTokenOperators = ['&&', '||'];
    if (singleTokenOperators.includes(nextToken)) return { increasedIndex: index, result: <Operator>nextToken };
    if (dualTokenOperators.includes(nextToken + overNextToken)) return { increasedIndex: index + 1, result: <Operator>(nextToken + overNextToken) };
    return FAIL;
}


function tryParseBraceExpression(index: number, tokens: Tokens): canFail<Expression> {
    if (index >= tokens.length) return FAIL;
    if (!expectToken(tokens[index++], '(')) return FAIL;
    const parseExpressionResult = tryParseExpression(index, tokens);
    if (parseExpressionResult === FAIL) return FAIL;
    index = parseExpressionResult.increasedIndex;
    if (!expectToken(tokens[index++], ')')) return FAIL;
    return { increasedIndex: index, result: parseExpressionResult.result };
}

function tryParseCondition(scope: Expression, index: number, tokens: Tokens): canFail<Condition> {
    if (index >= tokens.length) return FAIL;
    if (!expectToken(tokens[index++], '?')) return FAIL;
    const thenExpressionParseResult = tryParseSimpleExpression(index, tokens);
    if (thenExpressionParseResult === FAIL) return FAIL;
    index = thenExpressionParseResult.increasedIndex;
    if (index >= tokens.length) return FAIL;
    if (!expectToken(tokens[index++], ':')) return FAIL;
    const elseExpressionParseResult = tryParseSimpleExpression(index, tokens);
    if (elseExpressionParseResult === FAIL) return FAIL;
    index = elseExpressionParseResult.increasedIndex;
    return {
        increasedIndex: index,
        result: new Condition(
            scope,
            thenExpressionParseResult.result,
            elseExpressionParseResult.result,
        )
    };
}

export function tryParseExpression(index: number, tokens: Tokens): canFail<Expression> {
    if (index >= tokens.length) return FAIL;

    let rootExpression: Expression = new Noop();
    const simpleExpressionResult = tryParseSimpleExpression(index, tokens);
    if (simpleExpressionResult == FAIL) return FAIL;
    rootExpression = simpleExpressionResult.result;
    index = simpleExpressionResult.increasedIndex;

    while (true) {
        const functionExpressionResult = tryParseFunction(rootExpression, index, tokens);
        if (functionExpressionResult !== FAIL) {
            rootExpression = functionExpressionResult.result;
            index = functionExpressionResult.increasedIndex;
        } else {
            const operationExpressionResult = tryParseOperation(rootExpression, index, tokens);
            if (operationExpressionResult !== FAIL) {
                rootExpression = operationExpressionResult.result;
                index = operationExpressionResult.increasedIndex;
            } else {
                const conditionExpressionResult = tryParseCondition(rootExpression, index, tokens);
                if (conditionExpressionResult === FAIL) break;
                rootExpression = conditionExpressionResult.result;
                index = conditionExpressionResult.increasedIndex;
            }
        }
    }
    return { increasedIndex: index, result: rootExpression };
}
