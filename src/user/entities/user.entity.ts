import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { userRole } from '../constants/user.constants';

export type userDocument = HydratedDocument<User>;
@Schema()
export class User {
  @Prop({ required: true })
  name: string;
  @Prop({ required: true, unique: true })
  username: string;
  @Prop({ required: true, unique: true })
  email: string;
  @Prop({ required: true })
  password: string;
  @Prop({ default: false })
  isActive: boolean;
  @Prop({ default: userRole.student })
  role: userRole;
}

export const userSchema = SchemaFactory.createForClass(User);
