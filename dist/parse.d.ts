import { Tokens } from './lex';
import { Expression } from './syntax-tree/Expression';
declare type fail = null;
declare type canFail<T> = fail | ParseResult<T>;
declare type ParseResult<T> = {
    result: T;
    increasedIndex: number;
};
export declare function tryParseExpression(index: number, tokens: Tokens): canFail<Expression>;
export {};
