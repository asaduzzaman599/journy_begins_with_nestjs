import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { RolesGuard } from 'src/Guard/role.guard';
import { ProductModel } from './product.model';
import { ProductsService } from './products.service';

@Controller('products')
@UseGuards(new RolesGuard())
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  @Post()
  createProducts(@Body() product:ProductModel) {
    console.log(product)
    return this.productsService.insertProduct(product);
  }
  @Get()
  findsProducts() {
    return this.productsService.getAllProducts();
  }
  @Get(':id')
  findSingleProduct(@Param('id') id:string){
    return this.productsService.getSingleProduct(id)
  }
  @Patch(':id')
  updateProduct(@Param('id') id:string,@Body() product:ProductModel){
    return this.productsService.updateProduct(id,product)
  }
  
  @Delete(':id')
  deleteProduct(@Param('id') id:string,){
    return this.productsService.deleteProduct(id)
  }
}
