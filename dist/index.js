"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lex_1 = require("./lex");
var parse_1 = require("./parse");
require("./syntax-tree/default-functions");
var Field_1 = require("./syntax-tree/Field");
var Function_1 = require("./syntax-tree/Function");
function evaluateExpression(code) {
    var tokens = lex_1.Lex(code);
    var syntaxTree = parse_1.tryParseExpression(0, tokens);
    if (syntaxTree !== null) {
        return syntaxTree.result.eval().value;
    }
    return null;
}
exports.evaluateExpression = evaluateExpression;
// if($underage.value === "Unter 18") {
//     return "Ich bin mit den Bedingungen für minen Sohn/Tochter einverstanden."
//   } else {
//     return "Ich bin mit den Bedingungen einverstanden."
//   }
Field_1.Field.functions.push({
    name: 'underage',
    eval: function () { return ({
        type: 'object',
        value: {
            value: 'Unter 18'
        }
    }); }
});
Function_1.Function.functions.push({
    name: 'value',
    scopeType: 'object',
    eval: function (scope, params) { return ({
        type: 'string',
        value: scope.value,
    }); }
});
console.log(evaluateExpression("\n$underage.value == \"\u00DCber 18\" ? \n\"Ich bin mit den Bedingungen f\u00FCr minen Sohn/Tochter einverstanden.\" :\n\"Ich bin mit den Bedingungen einverstanden.\""));
