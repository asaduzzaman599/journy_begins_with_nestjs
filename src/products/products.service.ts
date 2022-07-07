import { Inject, Injectable } from '@nestjs/common';
import { Product, ProductModel } from './product.model';

import { Db , ObjectId} from 'mongodb';

@Injectable()
export class ProductsService {
    private products: Product[] = []

    constructor(
        @Inject('DATABASE_CONNECTION')
        private db: Db,
      ) {}

    async insertProduct(product: ProductModel) {
        const id:string = new Date().toString();
        const insertProduct:Product ={
            id,
            title:product.title,
            description:product.description,
            price:product.price
            
        } 
        const res =  await this.db.collection('product').insertOne(insertProduct);
       console.log(res)
        return res
    }

    async getAllProducts(){

       const res =  await this.db.collection('product').find().toArray();
       console.log(res)
        return res
    }
    
    findProduct(id:string):[Product,number]{
        const productIndex = this.products.findIndex(product=>product.id === id)
        const product = this.products[productIndex] 
        return [product,productIndex]
    }

    async getSingleProduct(id:string){
        const filter = {_id:new ObjectId(id)}
       
        const res =  await this.db.collection('product').findOne(filter);
       return res;
    }

    
    async updateProduct(id:string,updatedProduct:ProductModel){
        const product:Product = this.findProduct(id)[0];
        
        if(updatedProduct?.title){
            product.title = updatedProduct.title
        }
        if(updatedProduct?.description){
            product.description = updatedProduct.description
        }
        if(updatedProduct?.price){
            product.price = updatedProduct.price
        }
        const upDoc = {
            $set:{...updatedProduct}
        }
        const filter = {_id:new ObjectId(id)}

        
        const res =  await this.db.collection('product').updateOne(filter,upDoc);

        return res;
     }
     
     async deleteProduct(id:string){
        const filter = {_id:new ObjectId(id)}
       
        const res =  await this.db.collection('product').deleteOne(filter);
       return res;
     }
}
