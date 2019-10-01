import { IEvalResult } from './syntax-tree/Expression';
import { Parameter } from './syntax-tree/Parameter';
import { Operators } from './syntax-tree/Operators';
declare type FieldType = {
    name: string;
    eval: () => IEvalResult;
};
declare type OperationType = {
    leftType: string;
    rightType: string;
    operator: Operators;
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
    getField(name: string): FieldType;
    getFunction(name: string, type: string): FunctionType;
    getOperation(leftType: string, rightType: string, operator: Operators): OperationType;
}
export {};
