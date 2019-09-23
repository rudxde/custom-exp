"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lex_1 = require("./lex");
var parse_1 = require("./parse");
require("./syntax-tree/default-functions");
function evaluateExpression(code) {
    var result = evaluateExpressionWithType(code);
    return result ? result.value : null;
}
exports.evaluateExpression = evaluateExpression;
function evaluateExpressionWithType(code) {
    var tokens = lex_1.Lex(code);
    var syntaxTree = parse_1.tryParseExpression(0, tokens);
    if (syntaxTree !== null) {
        return syntaxTree.result.eval();
    }
    return null;
}
exports.evaluateExpressionWithType = evaluateExpressionWithType;
