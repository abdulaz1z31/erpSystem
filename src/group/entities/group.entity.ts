import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type groupDocument = HydratedDocument<Group>;
@Schema()
export class Group {
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  description: string;
  @Prop({ required: true })
  course_id: string;
  @Prop({ required: true })
  price: number;
  @Prop({ required: true })
  room: number;
  @Prop({ required: true })
  start_date: Date;
  end_date: Date;
  @Prop({ required: true })
  students: string[];
  @Prop({ required: true })
  teacher_id: string;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
}
export const groupSchema = SchemaFactory.createForClass(Group);
