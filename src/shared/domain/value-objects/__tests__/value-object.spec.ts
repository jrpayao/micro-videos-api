import {ValueObject} from "../../value-object";

class StringValueObject extends ValueObject<string> {
    constructor(readonly value: string) {
        super();
    }
}


class ComplexValueObject extends ValueObject<any> {
    constructor(readonly prop1: string, readonly prop2: number) {
        super();
    }
}


describe('ComplexValueObject', () => {
    it('should create an instance', () => {
        expect(new ComplexValueObject('test', 1)).toBeTruthy();
    });

    test('should return true when comparing two equal instances', () => {
        const vo1 = new ComplexValueObject('test', 1);
        const vo2 = new ComplexValueObject('test', 1);

        expect(vo1.equals(vo2)).toBeTruthy();
    });

    test('should return false when comparing two different instances', () => {
        const vo1 = new ComplexValueObject('test', 1);
        const vo2 = new ComplexValueObject('test2', 2);
        expect(vo1.equals(vo2)).toBeFalsy();
    });

    test('should return false when comparing with null', () => {
        const vo1 = new ComplexValueObject('test', 1);
        const vo2 = null as any;

        expect(vo1.equals(vo2)).toBeFalsy();
    });
});


describe('ValueObject', () => {
    it('should create an instance', () => {
        expect(new ValueObject()).toBeTruthy();
    });
}); 