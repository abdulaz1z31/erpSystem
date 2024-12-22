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
import { JwtService } from '@nestjs/jwt';
import { EnvService } from 'src/config/config.service';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private userService: UserService,
    private otpService: OtpService,
    private hashService: Hashing,
    private emailService: EmailService,
    private jwtService: JwtService,
    private envService: EnvService,
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
  async login(
    userData: loginDto,
  ): Promise<{ accessToken: string; refreshToken: string }> {
    let curUser: any;
    if (userData.email) {
      curUser = await this.userModel.findOne({
        email: userData.email,
      });
    } else {
      curUser = await this.userModel.findOne({
        username: userData.username,
      });
    }
    if (!curUser) {
      throw new MyBadRequiesError('User not found');
    }
    if (!curUser.isActive) {
      throw new MyBadRequiesError('Account not verified');
    }
    const check = await this.hashService.compare(
      userData.password,
      curUser.password,
    );
    if (!check) {
      throw new MyBadRequiesError('Username or password wrong');
    }
    const payload = {
      id: curUser._id,
      username: curUser.username,
      role: curUser.role,
      isActive: curUser.isActive,
    };
    const accessToken = await this.jwtService.signAsync(payload, {
      secret: this.envService.get('ACCESS_SECRET'),
      expiresIn: this.envService.get('ACCESS_EXPIRES_IN'),
    });
    const refreshToken = await this.jwtService.signAsync(payload, {
      secret: this.envService.get('REFRESH_SECRET'),
      expiresIn: this.envService.get('REFRESH_EXPIRES_IN'),
    });

    return { accessToken, refreshToken };
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
