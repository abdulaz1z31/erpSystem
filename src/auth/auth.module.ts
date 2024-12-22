import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { HashModule } from 'src/hashing';
import { EmailModule } from 'src/email/email.module';
import { OtpModule } from 'src/otp/otp.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from 'src/config/config.module';

@Module({
  imports: [
    UserModule,
    HashModule,
    EmailModule,
    OtpModule,
    ConfigModule,
    JwtModule.register({
      global: true,
      secret: process.env.ACCESS_SECRET,
      signOptions: { expiresIn: process.env.ACCESS_EXPIRES_IN },
    }),
    JwtModule.register({
      global: true,
      secret: process.env.REFRESH_SECRET,
      signOptions: { expiresIn: process.env.REFRESH_EXPIRES_IN },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
