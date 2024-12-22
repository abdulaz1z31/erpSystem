import { Module } from '@nestjs/common';
import { OtpService } from './otp.service';
import { Otp, otpSchema } from './entities/otp.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: Otp.name, schema: otpSchema }])],
  controllers: [],
  providers: [OtpService],
  exports: [OtpService, MongooseModule],
})
export class OtpModule {}
