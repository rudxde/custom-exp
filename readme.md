# custom-exp
Custom-exp is a library, to create your own expression language.

It is built on a simple pattern of 3 components.:
- fields
- functions
- operations

## Start:
```ts
import { Functionality, evaluateExpression } from 'custom-exp';
let functionality = new Functionality(); // creates a new functionality set with default types.
const result = evaluateExpression(functionality, '"hello world"');
console.log(result); // => string: hello world
```

## fields:
```
$<name>
```
Fields are like variables. You can define them by adding the functionality:
```ts
functionality.addField({
    name: 'fieldName', // name of the selector
    eval: () => ({
        type: 'my-type', // name of the return type
        value: 'return value', // value to be returned
    }),
});
```

now the field can be accessed in the expression as ```$fieldName```.

## functions
functions can be executed on a expression.
```
<Expression>.<function>(<parameters>)
```
if no parameter is passed, the braces can be ignored.

An function have to be associated to a type.

```ts
functionality.addFunctions({
    scopeType: 'my-type',
    name: 'default',
    eval: (scope: InputField, parameters: Parameter[]) => ({
        type: 'string',
        value: 'im a return type',
    })
});
```
This adds to the function ```.default`` to all expression of the ```my-type```.
Example:
```
$fieldName.default
```
evaluates to 'im a return type'.


An parameter can be easily accessed with the function ```Parameter.getParam(...```.

## operations
Operations combining two expressions:
```
<Expression> <Operator> <Expression>
```
The operator can be set out of a large verity of characters. All possibility's are listed in the file 'operators.ts'.
Example:
```
// concat array
functionality.addOperation({
    leftType: 'array',
    rightType: 'array',
    operator: '+',
    eval: (left: IEvalResult[], right: IEvalResult[]) => {
        return {
            type: 'array',
            value: [
                ...left,
                ...right,
            ]
        };
    }
});
```
This operation makes it possible to concatenate two arrays with a plus operator.

## Language overview:
```
<Expression> := <Field> | <Function> | <Operation> | <Constant> | (<Expression>) | <Condition> | <Array> | <Noop>
<Field> := $<name>
<Function> := <Expression>.<name>[(<Parameter> [, <Parameter>]*)?]
<Parameter> := <Expression>
<Operation> := <Expression> <Operator> <Expression>
<Operator> := + | - | * | / | - | [...]
<Constant> := <NumberConstant> | <StringConstant> | <BooleanConstant>
<NumberConstant> := 0x[0-9A-F]+ | 0b[0|1]+ | [0-9]+(.[0-9]+)?
<StringConstant> := '<text>' | "<text>"
<BooleanConstant> := true | false
<Condition> := <Expression> ? <Expression> : <Expression>
<Array> := ([)(]) | ([)<Expression> (, <Expression>)*(])
<Noop> := 
```