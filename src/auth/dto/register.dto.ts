import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { userRole } from 'src/user/constants/user.constants';

export class registerDto {
  @ApiProperty({
    description: 'Name of user',
    example: 'Abdulaziz',
  })
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Username of user',
    example: '@aaa_ooo4',
  })
  @IsNotEmpty()
  username: string;

  @ApiProperty({
    description: 'email of user',
    example: 'a.abdulaziz3010@gmail.com',
  })
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: 'Strong password for user',
    example: '$tr0ng.Password',
  })
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    description: 'Role of user',
    example: 'student',
  })
  role: userRole;
}
