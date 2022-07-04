import { Body, Controller, Get, Post } from "@nestjs/common";
import { Category } from "./category.model";
import { CategoryService } from "./category.service";

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

 /*  @Get()
  res(){
    return "hello"
  } */
  @Get()
  async findCategories(){
    return this.categoryService.findCategories()
  }
  
  @Post()
  async addCategories(@Body() Category:Category){
    return this.categoryService.addCategories(Category)
  }
}