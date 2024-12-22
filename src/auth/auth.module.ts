import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { HashModule } from 'src/hashing';
import { EmailModule } from 'src/email/email.module';
import { OtpModule } from 'src/otp/otp.module';

@Module({
  imports: [UserModule, HashModule, EmailModule, OtpModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
