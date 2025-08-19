export interface Product {
    id: number;
    name: string;
    type: ProductType;

}

interface PhysicalProductInterface extends Product {
    weight: number;
    type: ProductType.PHYSICAL;
}

export class PhysicalProduct implements PhysicalProductInterface {
    public weight: number;
    id: number;
    name: string;
    type: ProductType.PHYSICAL = ProductType.PHYSICAL;


    constructor(weight: number, id: number, name: string) {
        this.weight = weight;
        this.id = id;
        this.name = name;
    }

    getWeight(): number {
        return this.weight;
    }

}

interface DigitalProductInterface extends Product {
    fileSize: number;
    type: ProductType.DIGITAL;
}

export class DigitalProduct implements DigitalProductInterface {
    public fileSize: number;
    id: number;
    name: string;
    type: ProductType.DIGITAL = ProductType.DIGITAL;


    constructor(fileSize: number, id: number, name: string) {
        this.fileSize = fileSize;
        this.id = id;
        this.name = name;
    }


    getFileSize(): number {
        return this.fileSize;
    }
}

export enum ProductType {
    PHYSICAL,
    DIGITAL,

}

export type AnyProduct = PhysicalProduct | DigitalProduct;

export function getShippingInfo(product: AnyProduct): string {
    switch (product.type) {
        case ProductType.PHYSICAL:
            return `Shipping weight: ${product.weight} kg`;
        case ProductType.DIGITAL:
            return `File size: ${product.fileSize} MB`;
    }
}
