import { IEvalResult } from './syntax-tree/Expression';
import { Operator } from './syntax-tree/Operation';
import { Parameter } from './syntax-tree/Parameter';
declare type FieldType = {
    name: string;
    eval: () => IEvalResult;
};
declare type OperationType = {
    leftType: string;
    rightType: string;
    operator: Operator;
    eval: (leftResult: any, rightResult: any) => IEvalResult;
};
declare type FunctionType = {
    name: string;
    scopeType: string;
    eval: (scopeResult: any, parameters: Parameter[]) => IEvalResult;
};
export declare class Functionality {
    fields: FieldType[];
    operations: OperationType[];
    functions: FunctionType[];
    constructor(shouldAddDefaults?: boolean);
    addField(a: FieldType): void;
    addFunctions(a: FunctionType): void;
    addOperation(a: OperationType): void;
}
export {};
