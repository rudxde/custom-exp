"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Field_1 = require("./syntax-tree/Field");
var Function_1 = require("./syntax-tree/Function");
var Parameter_1 = require("./syntax-tree/Parameter");
var Operation_1 = require("./syntax-tree/Operation");
var Noop_1 = require("./syntax-tree/Noop");
var constant_1 = require("./syntax-tree/constant");
var array_1 = require("./syntax-tree/array");
var condition_1 = require("./syntax-tree/condition");
var FAIL = null;
function expectToken(token, expectedContent) {
    return token.content === expectedContent;
}
function expectTokenType(token, expectedType) {
    return token.type === expectedType;
}
function tryParseSimpleExpression(index, tokens) {
    var braceExpressionResult = tryParseBraceExpression(index, tokens);
    if (braceExpressionResult != FAIL)
        return braceExpressionResult;
    var arrayExpression = tryParseArray(index, tokens);
    if (arrayExpression != FAIL)
        return arrayExpression;
    var booleanResult = tryParseBoolean(index, tokens);
    if (booleanResult !== FAIL)
        return booleanResult;
    var numberResult = tryParseNumber(index, tokens);
    if (numberResult !== FAIL)
        return numberResult;
    var stringResult = tryParseString(index, tokens);
    if (stringResult !== FAIL)
        return stringResult;
    var fieldResult = tryParseField(index, tokens);
    if (fieldResult !== FAIL)
        return fieldResult;
    return FAIL;
}
function tryParseString(index, tokens) {
    if (!expectTokenType(tokens[index], 'string'))
        return FAIL;
    return ({
        increasedIndex: index + 1,
        result: new constant_1.StringConstant(tokens[index].content),
    });
}
function tryParseNumber(index, tokens) {
    if (!expectTokenType(tokens[index], 'other'))
        return FAIL;
    var value = tokens[index].content;
    if (Number(value) === NaN)
        return FAIL;
    return ({
        increasedIndex: index + 1,
        result: new constant_1.NumberConstant(Number(value)),
    });
}
function tryParseBoolean(index, tokens) {
    if (!expectTokenType(tokens[index], 'other'))
        return FAIL;
    if (tokens[index].content !== 'true' && tokens[index].content !== 'false')
        return FAIL;
    return ({
        increasedIndex: index + 1,
        result: new constant_1.BooleanConstant(tokens[index].content === 'true' ? true : false),
    });
}
function tryParseField(index, tokens) {
    if (index >= tokens.length)
        return FAIL;
    if (!expectToken(tokens[index++], '$'))
        return FAIL;
    if (!expectTokenType(tokens[index], 'other'))
        return FAIL;
    var newField = new Field_1.Field(tokens[index++].content);
    return { result: newField, increasedIndex: index };
}
function tryParseArray(index, tokens) {
    if (index >= tokens.length)
        return FAIL;
    if (!expectToken(tokens[index++], '['))
        return FAIL;
    if (index >= tokens.length)
        return FAIL;
    var elements = [];
    while (true) {
        var expressionResult = tryParseExpression(index, tokens);
        if (expressionResult === FAIL)
            return FAIL;
        elements.push(expressionResult.result);
        index = expressionResult.increasedIndex;
        if (index >= tokens.length)
            return FAIL;
        if (!expectToken(tokens[index], ':'))
            break;
        index++;
        if (index >= tokens.length)
            return FAIL;
    }
    if (!expectToken(tokens[index++], ']'))
        return FAIL;
    return { result: new array_1.Array(elements), increasedIndex: index };
}
function tryParseFunction(scope, index, tokens) {
    if (index >= tokens.length)
        return FAIL;
    if (scope === FAIL)
        return FAIL;
    if (!expectToken(tokens[index++], '.'))
        return FAIL;
    if (index >= tokens.length)
        return FAIL;
    if (!expectTokenType(tokens[index], 'other'))
        return FAIL;
    var name = tokens[index++].content;
    var parameters = [];
    if (index < tokens.length && expectToken(tokens[index], '(')) {
        index++;
        while (true) {
            var expressionResult = tryParseExpression(index, tokens);
            if (expressionResult === FAIL)
                return FAIL;
            parameters.push(new Parameter_1.Parameter(expressionResult.result));
            index = expressionResult.increasedIndex;
            if (!expectToken(tokens[index], ':'))
                break;
            index++;
        }
        if (!expectToken(tokens[index++], ')'))
            return FAIL;
    }
    var newFunction = new Function_1.Function(scope, name, parameters);
    return { result: newFunction, increasedIndex: index };
}
function tryParseOperation(left, index, tokens) {
    if (index >= tokens.length)
        return FAIL;
    var operatorResult = tryParseOperator(index, tokens);
    if (operatorResult === FAIL)
        return FAIL;
    index = operatorResult.increasedIndex;
    var operator = operatorResult.result;
    var rightResult = tryParseSimpleExpression(index, tokens);
    if (rightResult === FAIL)
        return FAIL;
    index = rightResult.increasedIndex;
    var right = rightResult.result;
    var newOperation = new Operation_1.Operation(left, right, operator);
    return { increasedIndex: index, result: newOperation };
}
function tryParseOperator(index, tokens) {
    if (index >= tokens.length)
        return FAIL;
    if (!expectTokenType(tokens[index], 'control') && !expectTokenType(tokens[index], 'equals'))
        return FAIL;
    var nextToken = tokens[index++].content;
    if (index >= tokens.length)
        return FAIL;
    var overNextToken = tokens[index].content;
    var singleTokenOperators = ['+', '-', '*', '/', '%', '<', '>', '^', ',', '=='];
    var dualTokenOperators = ['&&', '||', '!='];
    if (singleTokenOperators.includes(nextToken))
        return { increasedIndex: index, result: nextToken };
    if (dualTokenOperators.includes(nextToken + overNextToken))
        return { increasedIndex: index + 1, result: (nextToken + overNextToken) };
    return FAIL;
}
function tryParseBraceExpression(index, tokens) {
    if (index >= tokens.length)
        return FAIL;
    if (!expectToken(tokens[index++], '('))
        return FAIL;
    var parseExpressionResult = tryParseExpression(index, tokens);
    if (parseExpressionResult === FAIL)
        return FAIL;
    index = parseExpressionResult.increasedIndex;
    if (!expectToken(tokens[index++], ')'))
        return FAIL;
    return { increasedIndex: index, result: parseExpressionResult.result };
}
function tryParseCondition(scope, index, tokens) {
    if (index >= tokens.length)
        return FAIL;
    if (!expectToken(tokens[index++], '?'))
        return FAIL;
    var thenExpressionParseResult = tryParseSimpleExpression(index, tokens);
    if (thenExpressionParseResult === FAIL)
        return FAIL;
    index = thenExpressionParseResult.increasedIndex;
    if (index >= tokens.length)
        return FAIL;
    if (!expectToken(tokens[index++], ':'))
        return FAIL;
    var elseExpressionParseResult = tryParseSimpleExpression(index, tokens);
    if (elseExpressionParseResult === FAIL)
        return FAIL;
    index = elseExpressionParseResult.increasedIndex;
    return {
        increasedIndex: index,
        result: new condition_1.Condition(scope, thenExpressionParseResult.result, elseExpressionParseResult.result)
    };
}
function tryParseExpression(index, tokens) {
    if (index >= tokens.length)
        return FAIL;
    var rootExpression = new Noop_1.Noop();
    var simpleExpressionResult = tryParseSimpleExpression(index, tokens);
    if (simpleExpressionResult == FAIL)
        return FAIL;
    rootExpression = simpleExpressionResult.result;
    index = simpleExpressionResult.increasedIndex;
    while (true) {
        var functionExpressionResult = tryParseFunction(rootExpression, index, tokens);
        if (functionExpressionResult !== FAIL) {
            rootExpression = functionExpressionResult.result;
            index = functionExpressionResult.increasedIndex;
        }
        else {
            var operationExpressionResult = tryParseOperation(rootExpression, index, tokens);
            if (operationExpressionResult !== FAIL) {
                rootExpression = operationExpressionResult.result;
                index = operationExpressionResult.increasedIndex;
            }
            else {
                var conditionExpressionResult = tryParseCondition(rootExpression, index, tokens);
                if (conditionExpressionResult === FAIL)
                    break;
                rootExpression = conditionExpressionResult.result;
                index = conditionExpressionResult.increasedIndex;
            }
        }
    }
    return { increasedIndex: index, result: rootExpression };
}
exports.tryParseExpression = tryParseExpression;
