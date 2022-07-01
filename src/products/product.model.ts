export class ProductModel {
    constructor(
        public title: string,
        public description: number,
        public price: number) { }
}

export interface Product {
    id: string,
    title: string,
    description: number,
    price: number
}