import { IsString, MinLength } from  'class-validator';
import { CategoryService } from "./category.service";

export class  Category {
    @IsString()
    @MinLength(10)
    name: string;

    active:boolean;
  
    static fromap(data: Category):Category{
        const category = new Category();
        category.name = data.name
        category.active = data?.active ?? false;
        console.log('hello')
        return category
    }
}

