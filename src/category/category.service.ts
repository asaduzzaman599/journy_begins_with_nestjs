import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { ProductsService } from "src/products/products.service";
import { Category } from "./category.model";

@Injectable()
export class CategoryService {
    constructor(
       /*  @Inject(forwardRef(() => ProductsService))
        private readonly productsService: ProductsService, */
        
      ) {
        
      }
    private categories: Category[] = []

    async findCategories(){
        const t= /* this.productsService.getAllProducts */[]
        return [...this.categories,t]
    }

     addCategories(category:Category):Category[]{
        this.categories.push(category)
        return this.categories.map((c:Category)=>Category.fromap(c))
    }
}