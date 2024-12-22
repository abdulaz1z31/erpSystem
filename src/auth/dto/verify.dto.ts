import { IsNotEmpty } from 'class-validator';
export class verifyDataDto {
  @IsNotEmpty()
  username: string;
  @IsNotEmpty()
  otp: string;
}
