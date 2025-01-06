import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { NotificationEntity } from '../entities/notification.entity';

export type NotificationDocument = Notification & Document;

@Schema()
export class Notification implements NotificationEntity {
  @Prop()
  title: string;

  @Prop()
  content: string;

  @Prop({ default: false })
  clicked: boolean;

  @Prop()
  type: string;

  @Prop()
  link?: string;

  @Prop({ type: Types.ObjectId, ref: 'User' })
  user: string;

  //   @Prop({ type: Types.ObjectId, ref: 'User' })
  //   from: string;

  //   @Prop({ type: Types.ObjectId, ref: 'Post' })
  //   post: string;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const NotificationSchema = SchemaFactory.createForClass(Notification);
