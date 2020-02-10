import { IEvalResult } from './syntax-tree/expression';
import { Parameter } from './syntax-tree/parameter';
import { addDefaults } from './syntax-tree/default-functions';
import { Operators } from './syntax-tree/operators';
type FieldType = {
    name: string;
    eval: () => IEvalResult;
};

type OperationType = {
    leftType: string;
    rightType: string;
    operator: Operators;
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

    getField(name: string): FieldType {
        const result = this.fields.find(x => x.name === name);
        if (!result) throw new Error(`No Field with identifier '${name}' found.`);
        return result;
    }

    getFunction(name: string, type: string): FunctionType {
        const result = this.functions.find(x => x.name === name && x.scopeType === type);
        if (!result) throw new Error(`Function ${name} not found for type ${type}`);
        return result;
    }

    getOperation(leftType: string, rightType: string, operator: Operators): OperationType {
        const result = this.operations.find(x => x.leftType === leftType && x.rightType === rightType && x.operator === operator);
        if (!result) throw new Error(`No function found for operator '${operator}' for types '${leftType}'X'${rightType}'`);
        return result;
    }
}
