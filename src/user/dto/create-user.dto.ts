import { userRole } from '../constants/user.constants';

export class CreateUserDto {
  name: string;
  username: string;
  email: string;
  password: string;
  isActive?: boolean;
  role?: userRole;
}
