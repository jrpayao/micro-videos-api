import { ValueObject } from "./value-object";

export abstract class Entity<T> {
    abstract get entity_id(): ValueObject<T>;
    abstract toJSON(): any;
}