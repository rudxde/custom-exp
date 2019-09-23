import './syntax-tree/default-functions';
import { IEvalResult } from './syntax-tree/Expression';
import { Functionality } from './functionality';
export declare function evaluateExpression(functionality: Functionality, code: string): any;
export declare function evaluateExpressionWithType(functionality: Functionality, code: string): IEvalResult | null;
export { Functionality };
