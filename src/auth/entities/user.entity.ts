import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class User {

  _id ?: string

  @Prop({ unique: true, required: true })
  email: string;

  @Prop({ minlength: 6, required: true })
  password?: string;

  @Prop({ require: true })
  name: string;

  @Prop({ default: true })
  isActive: boolean;

  @Prop({ type: [String], default: ['user'] })
  rols: string[];
}

export const USER_SCHEMA = SchemaFactory.createForClass(User);
