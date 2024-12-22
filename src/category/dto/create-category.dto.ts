import { IsNotEmpty } from 'class-validator';

export class CreateCategoryDto {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  description: string;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
}
