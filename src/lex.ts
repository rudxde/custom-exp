export type TokenTypes = 'string' | 'control' | 'other';
export type Token = { content: string; type: TokenTypes };
export type Tokens = Token[];
/**
 * Lexical analysis of the code in tokens.
 *
 * @export
 * @param {string} code
 * @returns {Tokens}
 */
export function Lex(code: string): Tokens {
    const result: Tokens = [];
    let actualToken: string = '';
    for (let i = 0; i < code.length; i++) {
        const char = code.charAt(i);
        switch (char) {
            case '\r': // Fall trough
            case '\n':
                break;
            case '\'': // Fall trough
            case '\"':
                result.push({ content: actualToken, type: 'other' });
                actualToken = '';
                i++;
                let stringEnded: boolean = false;
                for (; !stringEnded && i < code.length; i++) {
                    const stringChar = code.charAt(i);
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
                        default:
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
                } else {
                    result.push({ content: '=', type: 'control' });
                }
                actualToken = '';
                break;
            default:
                actualToken += char;
        }
    }
    result.push({ content: actualToken, type: 'other' });
    return result.filter(x => x.type === 'string' || x.content);
}
