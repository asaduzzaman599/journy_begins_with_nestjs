import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';
import { ProductsController } from './products/products.controller';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [ProductsModule,CategoryModule,ConfigModule.forRoot({
    envFilePath: '.env',
    isGlobal:true
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
