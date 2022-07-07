import { Module } from '@nestjs/common';
import { CategoryService } from 'src/category/category.service';
import { DatabaseModule } from 'src/database/db.module';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

@Module({
  imports:[CategoryService,DatabaseModule ],
  exports:[CategoryService],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
