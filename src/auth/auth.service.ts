/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { registerDto } from './dto/register.dto';
import { loginDto } from './dto/login.dto';
import { verifyDataDto } from './dto/verify.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/user/entities/user.entity';
import { Model } from 'mongoose';
import { UserService } from 'src/user/user.service';
import { MyBadRequiesError } from 'src/errors/errors';
import { OtpService } from 'src/otp/otp.service';
import { Hashing } from 'src/hashing/hash';
import { EmailService } from 'src/email/mailer';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private userService: UserService,
    private otpService: OtpService,
    private hashService: Hashing,
    private emailService: EmailService,
  ) {}

  async register(userData: registerDto) {
    const user = await this.userModel.findOne({ username: userData.username });
    if (user) {
      throw new MyBadRequiesError('User already exists');
    }

    const hashPassword = await this.hashService.generate(userData.password);
    userData.password = hashPassword;

    const onetimepassword = this.otpService.generateOtp();
    const time = new Date(Date.now() + 3 * 60 * 1000);
    const otpData = {
      username: userData.username,
      otp: onetimepassword,
      expire_time: time,
    };

    await this.otpService.create(otpData);
    await this.emailService.sendEmail(
      userData.email,
      'Your otp code',
      onetimepassword,
    );
    return this.userService.create(userData);
  }

  async verify(
    otpData: verifyDataDto,
  ): Promise<{ message: string; statusCode: number }> {
    const otpdata = await this.otpService.findOne(otpData.username);
    if (!otpdata) {
      throw new MyBadRequiesError('otp not found');
    }
    if (otpdata.otp !== otpData.otp) {
      throw new MyBadRequiesError('Otp is not valid');
    }
    const curTime = new Date(Date.now());
    if (otpdata.expire_time < curTime) {
      await this.otpService.remove(otpData.username);
      throw new MyBadRequiesError('Time expired');
    }
    await this.otpService.remove(otpData.username);
    await this.userModel.findOneAndUpdate(
      { username: otpData.username },
      { isActive: true },
    );
    return {
      message: 'Profile activated',
      statusCode: 200,
    };
  }
  async login(userData: loginDto) {
    return;
  }

  async getMe() {
    return;
  }
  async forget() {
    return;
  }
  async change() {
    return;
  }
  async reset() {
    return;
  }
}
