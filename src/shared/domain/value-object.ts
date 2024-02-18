import {isEqual} from "lodash";

export class ValueObject<T> {
    public equals(vo?: ValueObject<T>): boolean {
        if (vo === null || vo === undefined) {
            return false;
        }
        if (vo.constructor.name !== this.constructor.name) {
            return false;
        }

        return isEqual(vo, this);
    }
}