import './syntax-tree/default-functions';
import { IEvalResult } from './syntax-tree/Expression';
export declare function evaluateExpression(code: string): any;
export declare function evaluateExpressionWithType(code: string): IEvalResult | null;
