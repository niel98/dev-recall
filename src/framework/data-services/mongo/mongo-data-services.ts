import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { IDataServices } from 'src/core/abstracts';
import { MongoGenericRepository } from './mongo-generic-repository';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  Notification,
  NotificationDocument,
} from 'src/modules/notifications/schemas/notification.schema';

@Injectable()
export class MongoDataServices
  implements IDataServices, OnApplicationBootstrap
{
  notification: MongoGenericRepository<Notification>;
  constructor(
    @InjectModel(Notification.name)
    private NotificationRepository: Model<NotificationDocument>,
  ) {}

  onApplicationBootstrap() {
    this.notification = new MongoGenericRepository<Notification>(
      this.NotificationRepository,
    );
  }
}
