"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lex_1 = require("./lex");
var parse_1 = require("./parse");
require("./syntax-tree/default-functions");
var functionality_1 = require("./functionality");
exports.Functionality = functionality_1.Functionality;
function evaluateExpression(functionality, code) {
    var result = evaluateExpressionWithType(functionality, code);
    return result ? result.value : null;
}
exports.evaluateExpression = evaluateExpression;
function evaluateExpressionWithType(functionality, code) {
    var tokens = lex_1.Lex(code);
    var syntaxTree = parse_1.tryParseExpression(0, tokens);
    if (syntaxTree !== null) {
        return syntaxTree.result.eval(functionality);
    }
    return null;
}
exports.evaluateExpressionWithType = evaluateExpressionWithType;
