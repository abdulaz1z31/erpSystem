import { SetMetadata } from '@nestjs/common';
import { userRole } from 'src/user/constants/user.constants';

export const Roles = (...roles: userRole[]) => SetMetadata('roles', roles);
