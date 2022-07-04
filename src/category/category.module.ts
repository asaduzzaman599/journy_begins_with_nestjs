import { Module } from "@nestjs/common";
import { ProductsService } from "src/products/products.service";
import { CategoryController } from "./category.controller";
import { CategoryService } from "./category.service";

@Module({
  imports: [CategoryModule/* ,ProductsService */],
  controllers: [CategoryController],
  providers: [CategoryService],
  exports:[CategoryService]
})
export class CategoryModule {}