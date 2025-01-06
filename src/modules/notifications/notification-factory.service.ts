import { Injectable } from '@nestjs/common';
import { NotificationEntity } from './entities/notification.entity';
import { OptionalQuery } from 'src/core/types';

@Injectable()
export class NotificationFactoryService {
  create(data: OptionalQuery<Notification>) {
    const notification = new NotificationEntity();

    // if (data?.id) delete data.id;
    Object.assign(notification, data);

    return notification;
  }
}
