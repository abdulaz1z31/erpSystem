import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { CategoryModule } from './category/category.module';
import { CourseModule } from './course/course.module';
import { GroupModule } from './group/group.module';
import { MongooseModule } from '@nestjs/mongoose';
import { OtpModule } from './otp/otp.module';
import { HashModule } from './hashing';
import { EmailModule } from './email/email.module';
import { ConfigModule } from './config/config.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    UserModule,
    AuthModule,
    CategoryModule,
    CourseModule,
    GroupModule,
    MongooseModule.forRoot('mongodb://localhost/erp'),
    OtpModule,
    HashModule,
    EmailModule,
    ConfigModule,
    MailerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        transport: {
          service: config.get<string>('EMAIL_SERVICE'),
          auth: {
            user: config.get<string>('USER_EMAIL'),
            pass: config.get<string>('APP_PASSWORD'),
          },
        },
      }),
    }),
  ],
  controllers: [],
  providers: [
    // {
    //   provide: APP_GUARD,
    //   useClass: AuthGuard,
    // },
    // {
    //   provide: APP_GUARD,
    //   useClass: RolesGuard,
    // },
  ],
})
export class AppModule {}
