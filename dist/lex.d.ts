export declare type TokenTypes = 'string' | 'control' | 'assertion' | 'equals' | 'other';
export declare type Token = {
    content: string;
    type: TokenTypes;
};
export declare type Tokens = Token[];
export declare function Lex(code: string): Tokens;