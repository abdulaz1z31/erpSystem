import { IsNotEmpty } from 'class-validator';
import { userRole } from 'src/user/constants/user.constants';

export class registerDto {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  username: string;
  @IsNotEmpty()
  email: string;
  @IsNotEmpty()
  password: string;
  role: userRole;
}
