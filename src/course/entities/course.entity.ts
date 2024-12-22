import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type CourseDocument = HydratedDocument<Course>;

@Schema()
export class Course {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Category' })
  category_id: mongoose.Types.ObjectId;

  @Prop({ default: Date.now })
  created_at: Date;

  @Prop()
  updated_at: Date;

  @Prop()
  deleted_at: Date;
}

export const courseSchema = SchemaFactory.createForClass(Course);
