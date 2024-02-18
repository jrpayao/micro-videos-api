import {Uuid} from "../shared/domain/value-objects/uuid.vo";
import {CategoryValidatorFactory} from "./category.validator";
import {EntityValidationError} from "../shared/validators/validation.error";
import {Entity} from "../shared/domain/entity";
import { ValueObject } from "../shared/domain/value-object";

export type CategoryConstructorProps = {
    category_id?: Uuid;
    name: string;
    description?: string | null;
    is_active?: boolean;
    created_at?: Date;
};

export type CategoryCreateCommand = {
    name: string;
    description?: string | null;
    is_active?: boolean;
}

export class CategoryEntity extends Entity<CategoryConstructorProps> {

    category_id: Uuid;
    name: string;
    description: string | null;
    is_active: boolean;
    created_at: Date;

    constructor(props: CategoryConstructorProps) {
        super();
        this.category_id = props.category_id || new Uuid();
        this.name = props.name;
        this.description = props.description ?? null;
        this.is_active = props.is_active ?? true;
        this.created_at = props.created_at ?? new Date();
    }

    get entity_id(): ValueObject<CategoryConstructorProps> {
        return this.category_id;
    }

    static create(props: CategoryCreateCommand): CategoryEntity {
        const category = new CategoryEntity(props);
        CategoryEntity.validate(category);
        return new CategoryEntity(props);
    }

    changeName(name: string): void {
        this.name = name;
        CategoryEntity.validate(this);
    }

    changeDescription(description: string | null): void {
        this.description = description;
        CategoryEntity.validate(this);
    }

    activate(): void {
        this.is_active = true;
    }

    deactivate(): void {
        this.is_active = false;
    }

    static validate(entity: CategoryEntity): boolean {
        const validator = CategoryValidatorFactory.create();
        const isValid = validator.validate(entity);
        if (!isValid) {
            throw new EntityValidationError(validator.errors);
        }
        return validator.validate(entity);
    }
    toJSON() {
        return {
            category_id: this.category_id.id,
            name: this.name,
            description: this.description,
            is_active: this.is_active,
            created_at: this.created_at
        };
    }

}