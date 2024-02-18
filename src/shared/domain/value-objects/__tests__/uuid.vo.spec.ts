import {InvalidUuidError, Uuid} from "../uuid.vo";
import {validate as uuidValidate} from "uuid";

describe('Uuid Unit Test', () => {

    const validateSpy = jest.spyOn(Uuid.prototype as any, 'validate');

    test('should throw an error when creating an instance with an invalid uuid', () => {
        expect(() => new Uuid('invalid-uuid')).toThrowError(new InvalidUuidError());
        expect(validateSpy).toHaveBeenCalledTimes(1);
    });

    test('should create an instance with a valid uuid', () => {
        const uuid = new Uuid();
        expect(uuid).toBeDefined();
        expect(uuid.id).toBeTruthy();
        expect(uuidValidate(uuid.id)).toBeTruthy();
        expect(validateSpy).toHaveBeenCalledTimes(1);
    });

    test('should accept a valid uuid', () => {
        const uuid = 'f47ac10b-58cc-4372-a567-0e02b2c3d479';
        expect(new Uuid(uuid)).toBeTruthy();
        expect(validateSpy).toHaveBeenCalledTimes(1);
    });
});