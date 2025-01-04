import { Injectable } from '@nestjs/common';
import { Notification } from './entities/notification.entity';
import { OptionalQuery } from 'src/core/types';

@Injectable()
export class NotificationFactoryService {
  create(data: OptionalQuery<Notification>) {
    const notification = new Notification();

    // if (data?.id) delete data.id;
    Object.assign(notification, data);

    return notification;
  }
}
