import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { UserEntity } from '../entities/users.entity';

export type UserDocument = User & Document;

@Schema()
export class User implements UserEntity {
  @Prop({ isRequired: true, unique: true })
  email: string;

  @Prop({ isRequired: true })
  password: string;

  @Prop()
  firstName: string;

  @Prop({ required: false })
  middleName: string;

  @Prop()
  lastName: string;

  @Prop({ required: false })
  jobTitle: string;

  @Prop({ required: false })
  companyName: string;

  @Prop({ required: false })
  companyAddress: string;

  @Prop({ required: false })
  avatar: string;

  @Prop({ isRequired: false })
  lastLoginDate: Date;

  @Prop({ isRequired: false, default: false })
  emailVerified: boolean;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
