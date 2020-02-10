import { IEvalResult } from './syntax-tree/expression';
import { Parameter } from './syntax-tree/parameter';
import { addDefaults } from './syntax-tree/default-functions';
import { Operators } from './syntax-tree/operators';
type FieldType = {
    /**
     * Name of the field. The name is without the '$' prefix. The prefix ('$') needs to be added in the expression, to select the field.
     *
     * @type {string}
     */
    name: string;
    /**
     * Will be called, to evaluate the fields value for each mentioning of the field
     *
     */
    eval: () => IEvalResult;
};

type OperationType = {
    leftType: string;
    rightType: string;
    operator: Operators;
    eval: (leftResult: any, rightResult: any) => IEvalResult;
};

type FunctionType = {
    /**
     * Name of th function. Can be later accessed on other expressions with ```.<name>(<params...>)```
     *
     * @type {string}
     */
    name: string;
    /**
     * type on which the function should be assigned to.
     *
     * @type {string}
     */
    scopeType: string;
    /**
     * evaluates the function. 
      * @param {any} scopeResult the result of the scope expression, where the function has ben called on.
      * @param {Parameter[]} parameters all parameters, passed to the function.
     */
    eval: (scopeResult: any, parameters: Parameter[]) => IEvalResult;
};

/**
 * Defines a set of functionality for the custom expressions.
 *
 * @export
 * @class Functionality
 */
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

    /**
     * adds a field to the functionality.
     *
     * @param {FieldType} a
     * @memberof Functionality
     */
    addField(a: FieldType): void {
        const existingIndex = this.fields.findIndex(x => x.name === a.name);
        if (existingIndex !== -1) {
            this.fields[existingIndex] = a;
        } else {
            this.fields.push(a);
        }
    }

    /**
     * adds a function to the functionality.
     *
     * @param {FunctionType} a
     * @memberof Functionality
     */
    addFunctions(a: FunctionType): void {
        const existingIndex = this.functions.findIndex(x => x.name === a.name && x.scopeType === a.scopeType);
        if (existingIndex !== -1) {
            this.functions[existingIndex] = a;
        } else {
            this.functions.push(a);
        }
    }

    /**
     * adds a operation to the functionality.
     *
     * @param {OperationType} a
     * @memberof Functionality
     */
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

    /**
     * finds a field with the given name
     *
     * @param {string} name
     * @returns {FieldType}
     * @memberof Functionality
     */
    getField(name: string): FieldType {
        const result = this.fields.find(x => x.name === name);
        if (!result) throw new Error(`No Field with identifier '${name}' found.`);
        return result;
    }

    /**
     * finds a function with the given name and matching type.
     *
     * @param {string} name
     * @param {string} type
     * @returns {FunctionType}
     * @memberof Functionality
     */
    getFunction(name: string, type: string): FunctionType {
        const result = this.functions.find(x => x.name === name && x.scopeType === type);
        if (!result) throw new Error(`Function ${name} not found for type ${type}`);
        return result;
    }

    /**
     * finds the operation with the mating types and operator.
     *
     * @param {string} leftType
     * @param {string} rightType
     * @param {Operators} operator
     * @returns {OperationType}
     * @memberof Functionality
     */
    getOperation(leftType: string, rightType: string, operator: Operators): OperationType {
        const result = this.operations.find(x => x.leftType === leftType && x.rightType === rightType && x.operator === operator);
        if (!result) throw new Error(`No function found for operator '${operator}' for types '${leftType}'X'${rightType}'`);
        return result;
    }
}
