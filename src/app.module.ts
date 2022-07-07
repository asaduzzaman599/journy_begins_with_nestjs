import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './Auth/auth.module';
import { CategoryModule } from './category/category.module';
import { JwtConfigService } from './JWT/jwt-config.service';
import { ProductsController } from './products/products.controller';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [ProductsModule,CategoryModule,AuthModule,ConfigModule.forRoot({
    envFilePath: '.env',
    isGlobal:true
  }),
  JwtModule.registerAsync({
    useClass: JwtConfigService
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
