import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type categoryDucument = HydratedDocument<Category>;
@Schema()
export class Category {
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  description: string;
  @Prop({ default: Date.now })
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
}
export const categorySchema = SchemaFactory.createForClass(Category);
