import { ApiProperty } from '@nestjs/swagger';

export class CreateCourseDto {
  @ApiProperty({
    description: 'Name of course',
    example: 'FullStack',
  })
  name: string;

  @ApiProperty({
    description: 'Description of course',
    example:
      'This is fullstack course which teaches students to build web sites',
  })
  description: string;

  @ApiProperty({
    description: 'Category of course',
    example: 'Programming',
  })
  category_id: string;

  @ApiProperty({
    description: 'Created date of course',
    example: '2024-12-22T16:30:24.978Z',
  })
  created_at: Date;

  @ApiProperty({
    description: 'Update date of course',
    example: '2024-12-22T16:30:24.978Z',
  })
  updated_at: Date;

  @ApiProperty({
    description: 'Deleted date of course',
    example: 'F2024-12-22T16:30:24.978ZullStack',
  })
  deleted_at: Date;
}
