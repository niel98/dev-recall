import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { IDataServices } from 'src/core/abstracts';
import { MongoGenericRepository } from './mongo-generic-repository';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  Notification,
  NotificationDocument,
} from 'src/modules/notifications/schemas/notification.schema';
import { Error, ErrorDocument } from 'src/modules/errors/schemas/error.schema';
import { User, UserDocument } from 'src/modules/users/schemas/user.schema';

@Injectable()
export class MongoDataServices
  implements IDataServices, OnApplicationBootstrap
{
  notifications: MongoGenericRepository<Notification>;
  errors: MongoGenericRepository<Error>;
  users: MongoGenericRepository<User>;

  constructor(
    @InjectModel(Notification.name)
    private NotificationRepository: Model<NotificationDocument>,
    @InjectModel(Error.name)
    private ErrorsRepository: Model<ErrorDocument>,
    @InjectModel(User.name)
    private UserRepository: Model<UserDocument>,
  ) {}

  onApplicationBootstrap() {
    this.notifications = new MongoGenericRepository<Notification>(
      this.NotificationRepository,
    );
    this.errors = new MongoGenericRepository<Error>(this.ErrorsRepository);
    this.users = new MongoGenericRepository<User>(this.UserRepository);
  }
}
