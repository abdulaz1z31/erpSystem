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
    description: 'Id this course mongoose object id',
    example: '67680b983504cd398a514c95',
  })
  @IsNotEmpty()
  course_id: string;

  @ApiProperty({
    description: 'Price of course',
    example: '2300000 uzs',
  })
  @IsNotEmpty()
  price: number;

  @ApiProperty({
    description: 'Number of room or name',
    example: 'Netflix or 20',
  })
  @IsNotEmpty()
  room: number;

  @ApiProperty({
    description: 'Start date of group',
    example: 'October 10th 2024',
  })
  @IsNotEmpty()
  start_date: Date;

  @ApiProperty({
    description: 'End date of group',
    example: '2024-12-22T16:30:24.978Z',
  })
  end_date: Date;

  @IsNotEmpty()
  @ApiProperty({
    description: 'Id of student in array',
    example: '[67680b983504cd398a514c95, 68680b983504cd398a514c85]',
  })
  students: string[];

  @ApiProperty({
    description: `Id teacher's of group`,
    example: '67680b983504cd398a514c95',
  })
  @IsNotEmpty()
  teacher_id: string;

  @ApiProperty({
    description: 'Created date of group',
    example: '2024-12-22T16:30:24.978Z',
  })
  created_at: Date;

  @ApiProperty({
    description: 'Updated date',
    example: '2024-12-22T16:30:24.978Z',
  })
  updated_at: Date;

  @ApiProperty({
    description: 'Deleted date',
    example: '2024-12-22T16:30:24.978Z',
  })
  deleted_at: Date;
}
