import { IsNotEmpty } from 'class-validator';

export class loginDto {
  @IsNotEmpty()
  username: string;
  email?: string;
  @IsNotEmpty()
  password: string;
}
