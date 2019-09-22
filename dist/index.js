"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lex_1 = require("./lex");
var parse_1 = require("./parse");
require("./syntax-tree/default-functions");
function evaluateExpression(code) {
    var syntaxTree = parse_1.tryParseExpression(0, lex_1.Lex(code));
    if (syntaxTree !== null) {
        return syntaxTree.result;
    }
    return null;
}
exports.evaluateExpression = evaluateExpression;
