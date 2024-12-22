import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
export class verifyDataDto {
  @ApiProperty({
    description: 'Username of user',
    example: '@aaa_ooo4',
  })
  @IsNotEmpty()
  username: string;

  @ApiProperty({
    description: 'One time password which sended to user to verify account',
    example: '@12HFK',
  })
  @IsNotEmpty()
  otp: string;
}
