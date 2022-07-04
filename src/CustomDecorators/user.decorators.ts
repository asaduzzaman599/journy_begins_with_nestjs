import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { ProductModel } from 'src/products/product.model';

export const Product = createParamDecorator(
  (data: ProductModel, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    console.log(request)
    return request.body;
  },
);