import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class loginDto {
  @ApiProperty({
    description: 'This is username of user',
    example: '@kepler',
  })
  @IsNotEmpty()
  username: string;

  @ApiProperty({
    description: 'This is email of user',
    example: 'olimcola@gmail.com',
  })
  email?: string;

  @ApiProperty({
    description: 'This is password of user',
    example: '$tr0ng.Password',
  })
  @IsNotEmpty()
  password: string;
}
