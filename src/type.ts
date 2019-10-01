import { Lex, Token } from './lex';
import { canFail, FAIL, expectToken, expectTokenType } from './parse';

export class Type {
    static parseType(typeString: string): IType {
        const tokens = Lex(typeString);
        const parseResult = Type.parse(tokens, 0);
        if (!parseResult) throw new Error('cannot parse Type' + typeString);
        return parseResult.result;
    }
    static parse(tokens: Token[], index: number): canFail<IType> {
        if (index >= tokens.length) return FAIL;
        const simpleTypeResult = Type.parseSimple(tokens, index);
        if (!simpleTypeResult) return FAIL;
        index = simpleTypeResult.increasedIndex;
        const UnionTypeResult = UnionType.tryParse(simpleTypeResult.result, tokens, index);
        if (UnionTypeResult) return UnionTypeResult;
        return simpleTypeResult;
    }
    static parseSimple(tokens: Token[], index: number): canFail<IType> {
        if (index >= tokens.length) return FAIL;
        const anyTypeResult = AnyType.tryParse(tokens, index);
        if (anyTypeResult) return anyTypeResult;
        const genericTypeResult = GenericType.tryParse(tokens, index);
        if (genericTypeResult) return genericTypeResult;
        const arrayTypeResult = ArrayType.tryParse(tokens, index);
        if (arrayTypeResult) return arrayTypeResult;
        const tupleTypeResult = TupleType.tryParse(tokens, index);
        if (tupleTypeResult) return tupleTypeResult;
        const objectTypeResult = ObjectType.tryParse(tokens, index);
        if (objectTypeResult) return objectTypeResult;
        const basicTypeResult = BasicType.tryParse(tokens, index);
        if (basicTypeResult) return basicTypeResult;
        return FAIL;
    }
}


interface IType {
    type: string;
    equals(other: IType): boolean;
}

// any
class AnyType implements IType {
    type = 'any';
    static tryParse(tokens: Token[], index: number): canFail<AnyType> {
        if (index >= tokens.length) return FAIL;
        if (!expectToken(tokens[index], 'any')) return FAIL;
        return {
            increasedIndex: index + 1,
            result: new AnyType(),
        };
    }
    equals(other: IType): boolean {
        return other.type === this.type;
    }
}

// Type
class BasicType implements IType {
    type = 'basic';
    constructor(
        public name: string
    ) { }
    static tryParse(tokens: Token[], index: number): canFail<BasicType> {
        if (index >= tokens.length) return FAIL;
        return {
            result: new BasicType(tokens[index].content),
            increasedIndex: index + 1,
        };
    }
    equals(other: IType): boolean {
        return other.type === this.type && (other as BasicType).name === this.name;
    }
}

// Type | Type
class UnionType implements IType {
    type = 'union';
    constructor(
        public left: IType,
        public right: IType
    ) { }
    static tryParse(left: IType, tokens: Token[], index: number): canFail<IType> {
        if (index >= tokens.length) return FAIL;
        if (!expectToken(tokens[index++], '|')) return FAIL;
        if (index >= tokens.length) return FAIL;
        const rightResult = Type.parse(tokens, index);
        if (!rightResult) return FAIL;
        index = rightResult.increasedIndex;
        if (left.equals(rightResult.result)) return { increasedIndex: index, result: left };
        return {
            increasedIndex: index,
            result: new UnionType(left, rightResult.result),
        };
    }
    equals(other: IType): boolean {
        if (other.type === this.type) {
            return (other as UnionType).left.equals(this.left) &&
                (other as UnionType).right.equals(this.right);
        } else return false;
    }
}

// Name<generic,*>
class GenericType extends BasicType implements IType {
    type = 'generic';
    constructor(
        name: string,
        public generics: IType[],
    ) {
        super(name);
    }
    static tryParse(tokens: Token[], index: number): canFail<GenericType> {
        if (index >= tokens.length) return FAIL;
        const name = tokens[index++].content;
        if (index >= tokens.length) return FAIL;
        if (!expectToken(tokens[index++], '<')) return FAIL;
        if (index >= tokens.length) return FAIL;
        const elements: IType[] = [];
        while (true) {
            const typeResult = Type.parse(tokens, index);
            if (!typeResult) return FAIL;
            index = typeResult.increasedIndex;
            if (index >= tokens.length) return FAIL;
            elements.push(typeResult.result);
            if (!expectToken(tokens[index], ',')) break;
            index++;
            if (index >= tokens.length) return FAIL;
        }
        if (!expectToken(tokens[index], '>')) return FAIL;
        index++;
        return {
            increasedIndex: index,
            result: new GenericType(name, elements),
        };
    }
    equals(other: IType): boolean {
        if (other.type === this.type) {
            const otherGeneric = (other as GenericType);
            if (this.generics.length !== otherGeneric.generics.length) return false;
            for (let i = 0; i < this.generics.length; i++) {
                if (!this.generics[i].equals(otherGeneric.generics[i])) return false;
            }
            return true;
        } else return false;
    }
}

// Name[Type,*]
class ArrayType extends BasicType implements IType {
    type = 'array';
    constructor(
        name: string,
        public elements: IType[],
    ) {
        super(name);
    }

    static tryParse(tokens: Token[], index: number): canFail<ArrayType> {
        if (index >= tokens.length) return FAIL;
        const name = tokens[index++].content;
        if (index >= tokens.length) return FAIL;
        if (!expectToken(tokens[index++], '[')) return FAIL;
        if (index >= tokens.length) return FAIL;
        const elements: IType[] = [];
        while (true) {
            const typeResult = Type.parse(tokens, index);
            if (!typeResult) return FAIL;
            index = typeResult.increasedIndex;
            if (index >= tokens.length) return FAIL;
            elements.push(typeResult.result);
            if (!expectToken(tokens[index], ',')) break;
            index++;
            if (index >= tokens.length) return FAIL;
        }
        if (!expectToken(tokens[index], ']')) return FAIL;
        index++;
        return {
            increasedIndex: index,
            result: new ArrayType(name, elements),
        };
    }

    equals(other: IType): boolean {
        if (other.type === this.type) {
            const otherArray = (other as ArrayType);
            if (this.elements.length !== otherArray.elements.length) return false;
            for (let i = 0; i < this.elements.length; i++) {
                if (!this.elements[i].equals(otherArray.elements[i])) return false;
            }
            return true;
        } else return false;
    }
}

// (Type,*)
class TupleType implements IType {
    type = 'tuple';
    constructor(
        public elements: IType[],
    ) { }


    static tryParse(tokens: Token[], index: number): canFail<IType> {
        if (index >= tokens.length) return FAIL;
        if (!expectToken(tokens[index++], '(')) return FAIL;
        if (index >= tokens.length) return FAIL;
        const elements: IType[] = [];
        while (true) {
            const typeResult = Type.parse(tokens, index);
            if (!typeResult) return FAIL;
            index = typeResult.increasedIndex;
            if (index >= tokens.length) return FAIL;
            elements.push(typeResult.result);
            if (!expectToken(tokens[index], ',')) break;
            index++;
            if (index >= tokens.length) return FAIL;
        }
        if (!expectToken(tokens[index], ')')) return FAIL;
        index++;
        return {
            increasedIndex: index,
            result: elements.length === 1 ? elements[0] : new TupleType(elements),
        };
    }

    equals(other: IType): boolean {
        if (other.type === this.type) {
            const otherTuple = (other as TupleType);
            if (this.elements.length !== otherTuple.elements.length) return false;
            for (let i = 0; i < this.elements.length; i++) {
                if (!this.elements[i].equals(otherTuple.elements[i])) return false;
            }
            return true;
        } else return false;
    }

}

type ObjectEntity = {
    name: string;
    type: IType;
};

// {entity: Type}
class ObjectType implements IType {
    type = 'object';
    constructor(
        public entities: ObjectEntity[]
    ) { }

    static tryParse(tokens: Token[], index: number): canFail<ObjectType> {
        if (!expectToken(tokens[index++], '{')) return FAIL;
        const elements: ObjectEntity[] = [];
        while (true) {
            const name = tokens[index].content;
            if (expectToken(tokens[index++], ':')) return FAIL;
            const typeResult = Type.parse(tokens, index);
            if (!typeResult) return FAIL;
            index = typeResult.increasedIndex;
            elements.push({
                name,
                type: typeResult.result,
            });
            if (!expectToken(tokens[index], ',')) break;
            index++;
        }
        if (!expectToken(tokens[index], '}')) return FAIL;
        index++;
        return {
            increasedIndex: index,
            result: new ObjectType(elements),
        };
    }

    equals(other: IType): boolean {
        if (other.type === this.type) {
            const otherGeneric = (other as ObjectType);
            if (this.entities.length !== otherGeneric.entities.length) return false;
            for (let i = 0; i < this.entities.length; i++) {
                const otherEntity = otherGeneric.entities.find(x => x.name === this.entities[i].name);
                if (!otherEntity) return false;
                if (!this.entities[i].type.equals(otherEntity.type)) return false;
            }
            return true;
        } else return false;
    }
}
