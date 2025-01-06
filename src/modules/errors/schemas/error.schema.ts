import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { ErrorEntity } from '../entities/error.entity';

export type ErrorDocument = Error & Document;

@Schema()
export class Error implements ErrorEntity {
  @Prop()
  title: string;

  @Prop()
  category: string;

  @Prop()
  description: string;

  @Prop()
  solution: string;

  @Prop({ type: [String] })
  resources: string[];

  @Prop({ type: [String] })
  tags: string[];

  @Prop({ default: false })
  isResolved: boolean;

  @Prop({ type: Types.ObjectId, ref: 'User' })
  user: string;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const ErrorSchema = SchemaFactory.createForClass(Error);
