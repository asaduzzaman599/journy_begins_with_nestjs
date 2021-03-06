import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { JwtConfigService } from "src/JWT/jwt-config.service";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";

@Module({
    imports:[JwtModule.registerAsync({
        useClass: JwtConfigService
      })],
      providers:[AuthService],
      controllers:[AuthController],
     exports: [AuthService],
})

export class AuthModule {}