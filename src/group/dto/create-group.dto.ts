import { IsNotEmpty } from 'class-validator';

export class CreateGroupDto {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  description: string;
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
