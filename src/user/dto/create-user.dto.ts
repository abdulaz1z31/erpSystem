import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { userRole } from '../constants/user.constants';

export class CreateUserDto {
  @ApiProperty({
    description: 'Full name of user',
    example: 'John Doe',
  })
  name: string;

  @ApiProperty({
    description: 'Unique username for user',
    example: 'john_doe123',
  })
  username: string;

  @ApiProperty({
    description: 'Email address of the user',
    example: 'john.doe@example.com',
  })
  email: string;

  @ApiProperty({
    description: 'Password for the user account',
    example: 'StrongPassword123!',
  })
  password: string;

  @ApiPropertyOptional({
    description: 'Indicates if the user account is active',
    example: true,
  })
  isActive?: boolean;

  @ApiPropertyOptional({
    description: 'Role of the user in the system',
    example: userRole.student,
    enum: userRole,
  })
  role?: userRole;
}
