import { Expression, IEvalResult } from './Expression';
import { Functionality } from '../functionality';

export class Parameter {

    constructor(
        public expression: Expression
    ) {

    }

    /**
     * Reads an parameter fom the parameters array, and evaluates it. This function does also error handling.
     *
     * @static
     * @param {Functionality} functionality The functionality of the suite.
     * @param {Parameter[]} parameters All passed parameters.
     * @param {number} index The index of the parameter to be read.
     * @param {string} name An name for teh parameter, to give helpful feedback on errors.
     * @param {string} [type] The expected type of the parameter. If no type is passed, the type is ignored.
     * @returns {IEvalResult}
     * @memberof Parameter
     */
    public static getParam(functionality: Functionality, parameters: Parameter[], index: number, name: string, type?: string): IEvalResult {
        if (parameters.length <= index) throw new Error(`No parameter '${name} provided!`);
        const evaluated = parameters[index].expression.eval(functionality);
        if (type && evaluated.type !== type) throw new Error(`Wrong type for Parameter '${name} expected '${type}', but got '${evaluated.type}'`);
        return evaluated;
    }
    /**
     * like @see{getParam} just for optional parameters
     *
     * @static
     * @param {Functionality} functionality
     * @param {Parameter[]} parameters
     * @param {number} index
     * @param {string} name
     * @param {string} [type]
     * @returns {(IEvalResult | undefined)}
     * @memberof Parameter
     */
    public static getOptionalParam(functionality: Functionality, parameters: Parameter[], index: number, name: string, type?: string): IEvalResult | undefined {
        if (parameters.length <= index) return undefined;
        const evaluated = parameters[index].expression.eval(functionality);
        if (type && evaluated.type !== type) throw new Error(`Wrong type for Parameter '${name} expected '${type}', but got '${evaluated.type}'`);
        return evaluated;
    }
}
