import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateCategoryDto {
  @ApiProperty({
    description: 'Name of category',
    example: 'Programming',
  })
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Description of category',
    example: 'This is categort teaches programming',
  })
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    description: 'Created date of course',
    example: '2024-12-22T16:30:24.978Z',
  })
  created_at: Date;

  @ApiProperty({
    description: 'Updated date of course',
    example: '2024-12-22T16:30:24.978Z',
  })
  updated_at: Date;

  @ApiProperty({
    description: 'Deleted date of course',
    example: '2024-12-22T16:30:24.978Z',
  })
  deleted_at: Date;
}
