
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import {  JwtModuleOptions, JwtOptionsFactory } from "@nestjs/jwt";

@Injectable()
export class JwtConfigService implements JwtOptionsFactory{
    //.env file data
    constructor(private readonly configService: ConfigService){}

    createJwtOptions():JwtModuleOptions{

        console.log(this.configService.get<string>("JWT_EXPIRES"))
         const expiresDuration = this.configService.get<string>("JWT_EXPIRES");
        const secret = this.configService.get<string>("JWT_SECRET") ;
        const ignoreExpiration = true;
        
        return  {
            secret,
            ...(expiresDuration ? { signOptions: { expiresIn: expiresDuration } } : null),
            verifyOptions: { ignoreExpiration },
          }; 
          return
    }
}