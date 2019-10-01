"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Lex(code) {
    var result = [];
    var actualToken = '';
    for (var i = 0; i < code.length; i++) {
        var char = code.charAt(i);
        switch (char) {
            case '\r': // Fall trough
            case '\n':
                break;
            case '\'': // Fall trough
            case '\"':
                result.push({ content: actualToken, type: 'other' });
                actualToken = '';
                i++;
                var stringEnded = false;
                for (; !stringEnded && i < code.length; i++) {
                    var stringChar = code.charAt(i);
                    switch (stringChar) {
                        case '\\':
                            i++;
                            actualToken += code.charAt(i);
                            break;
                        case char:
                            stringEnded = true;
                            result.push({ content: actualToken, type: 'string' });
                            actualToken = '';
                            i--;
                            break;
                        default: // Fall trough
                            actualToken += stringChar;
                            break;
                    }
                }
                break;
            case ' ':
                result.push({ content: actualToken, type: 'other' });
                actualToken = '';
                break;
            case '.': // Fall trough
            case '$': // Fall trough
            case '&': // Fall trough
            case '§': // Fall trough
            case '%': // Fall trough
            case '+': // Fall trough
            case '-': // Fall trough
            case '*': // Fall trough
            case '/': // Fall trough
            case '%': // Fall trough
            case '(': // Fall trough
            case ')': // Fall trough
            case '[': // Fall trough
            case ']': // Fall trough
            case ':': // Fall trough
            case '\\': // Fall trough
            case '/': // Fall trough
            case '?': // Fall trough
            case '&': // Fall trough
            case '|': // Fall trough
            case '{': // Fall trough
            case '}': // Fall trough
            case '~': // Fall trough
            case '#': // Fall trough
            case '^': // Fall trough
            case '<': // Fall trough
            case '>': // Fall trough
            case ',': // Fall trough
            case '°': // Fall trough
            case '!':
                result.push({ content: actualToken, type: 'other' });
                result.push({ content: char, type: 'control' });
                actualToken = '';
                break;
            case '=':
                result.push({ content: actualToken, type: 'other' });
                if (code.charAt(i + 1) === '=') {
                    i++;
                    result.push({ content: '==', type: 'control' });
                }
                else {
                    result.push({ content: '=', type: 'control' });
                }
                actualToken = '';
                break;
            default:
                actualToken += char;
        }
    }
    result.push({ content: actualToken, type: 'other' });
    return result.filter(function (x) { return x.content; });
}
exports.Lex = Lex;
