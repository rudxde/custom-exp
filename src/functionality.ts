import { IEvalResult } from './syntax-tree/Expression';
import { Operator } from './syntax-tree/Operation';
import { Parameter } from './syntax-tree/Parameter';
import { addDefaults } from './syntax-tree/default-functions';
type FieldType = {
    name: string;
    eval: () => IEvalResult;
};

type OperationType = {
    leftType: string;
    rightType: string;
    operator: Operator;
    eval: (leftResult: any, rightResult: any) => IEvalResult;
};

type FunctionType = {
    name: string;
    scopeType: string;
    eval: (scopeResult: any, parameters: Parameter[]) => IEvalResult;
};

export class Functionality {
    public fields: FieldType[] = [];
    public operations: OperationType[] = [];
    public functions: FunctionType[] = [];

    constructor(
        shouldAddDefaults: boolean = true,
    ) {
        if (shouldAddDefaults) {
            addDefaults(this);
        }
    }
    addField(a: FieldType): void {
        const existingIndex = this.fields.findIndex(x => x.name === a.name);
        if (existingIndex !== -1) {
            this.fields[existingIndex] = a;
        } else {
            this.fields.push(a);
        }
    }
    addFunctions(a: FunctionType): void {
        const existingIndex = this.functions.findIndex(x => x.name === a.name && x.scopeType === a.scopeType);
        if (existingIndex !== -1) {
            this.functions[existingIndex] = a;
        } else {
            this.functions.push(a);
        }
    }
    addOperation(a: OperationType): void {
        const existingIndex = this.operations.findIndex(x =>
            x.operator === a.operator
            && x.leftType === a.leftType
            && x.rightType === a.rightType
        );
        if (existingIndex !== -1) {
            this.operations[existingIndex] = a;
        } else {
            this.operations.push(a);
        }
    }
}
