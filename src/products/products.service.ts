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
        console.log(insertProduct,product)
        this.products.push(insertProduct)
        return {insertedID : id}
    }

    getAllProducts(){


        return [... this.products]
    }
    
    findProductIndex(id:string):[Product,number]{
        const productIndex = this.products.findIndex(product=>product.id === id)
        const product = this.products[productIndex] 
        return [product,productIndex]
    }

    getSingleProduct(id:string){
       const product:Product = this.findProductIndex(id)[0];
       return product;
    }

    
    updateProduct(id:string,updatedProduct:ProductModel){
        const product:Product = this.findProductIndex(id)[0];
        if(updatedProduct?.title){
            product.title = updatedProduct.title
        }
        if(updatedProduct?.description){
            product.description = updatedProduct.description
        }
        if(updatedProduct?.price){
            product.price = updatedProduct.price
        }
        return product;
     }
}
