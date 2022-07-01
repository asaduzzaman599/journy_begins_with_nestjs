import { Injectable } from '@nestjs/common';
import { Product, ProductModel } from './product.model';

@Injectable()
export class ProductsService {
    private products: Product[] = []

    insertProduct(product: ProductModel) {
        const id:string = new Date().toString();
        const insertProduct:Product ={
            id,
            title:product.title,
            description:product.description,
            price:product.price
            
        } 
        this.products.push(insertProduct)
        return {insertedID : id}
    }
}
