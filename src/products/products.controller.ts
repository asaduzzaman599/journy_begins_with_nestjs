import { Controller, Get, Post } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Post()
  createProducts() {
    return 'hello';
  }
}
