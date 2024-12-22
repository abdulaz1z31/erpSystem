import { Controller, Get, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { registerDto } from './dto/register.dto';
import { loginDto } from './dto/login.dto';
import { verifyDataDto } from './dto/verify.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() userData: registerDto) {
    return await this.authService.register(userData);
  }

  @Post('login')
  async login(@Body() userData: loginDto) {
    return await this.authService.login(userData);
  }

  @Post('verify')
  async verify(@Body() verifyData: verifyDataDto) {
    return await this.authService.verify(verifyData);
  }

  @Get()
  async getProfile() {
    return await this.authService.getMe();
  }

  @Post()
  async forgetPassword() {}

  @Post()
  async changePassword() {}

  @Post()
  async resetPassword() {}
}
