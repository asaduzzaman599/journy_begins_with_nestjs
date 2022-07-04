import { Module } from '@nestjs/common';
import { CategoryService } from 'src/category/category.service';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

@Module({
  imports:[CategoryService],
  exports:[CategoryService],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
