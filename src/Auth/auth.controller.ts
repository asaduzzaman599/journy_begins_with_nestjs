import { Controller, Get, Param } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get(":email")
  async login(@Param('email') email:string){
    return this.authService.login(email)
  }
}