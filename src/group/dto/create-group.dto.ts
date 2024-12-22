import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateGroupDto {
  @ApiProperty({
    description: 'Name of group',
    example: 'Bootcamp FullStack N14',
  })
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Description of group',
    example: 'FullStack node+reactjs course',
  })
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    description: ' of group',
    example: 'Bootcamp FullStack N14',
  })
  @IsNotEmpty()
  course_id: string;
  @IsNotEmpty()
  price: number;
  @IsNotEmpty()
  room: number;
  @IsNotEmpty()
  start_date: Date;
  end_date: Date;
  @IsNotEmpty()
  students: string[];
  @IsNotEmpty()
  teacher_id: string;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
}
