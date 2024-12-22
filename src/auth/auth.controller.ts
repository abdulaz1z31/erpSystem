import { Controller, Get, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { registerDto } from './dto/register.dto';
import { loginDto } from './dto/login.dto';
import { verifyDataDto } from './dto/verify.dto';
import { Public } from './guard/public.decarators';
import { ApiOperation } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: 'Register' })
  @Post('register')
  async register(@Body() userData: registerDto) {
    return await this.authService.register(userData);
  }

  @ApiOperation({ summary: 'Login' })
  @Public()
  @Post('login')
  async login(@Body() userData: loginDto) {
    return await this.authService.login(userData);
  }

  @ApiOperation({ summary: 'Verify user' })
  @Post('verify')
  async verify(@Body() verifyData: verifyDataDto) {
    return await this.authService.verify(verifyData);
  }

  @ApiOperation({ summary: 'Get Profile' })
  @Get()
  async getProfile() {
    return await this.authService.getMe();
  }
  @ApiOperation({ summary: 'Forget password' })
  @Post()
  async forgetPassword() {}

  @ApiOperation({ summary: 'Change password' })
  @Post()
  async changePassword() {}

  @ApiOperation({ summary: 'Restart password' })
  @Post()
  async resetPassword() {}
}
