import { NotificationEntity } from 'src/modules/notifications/entities/notification.entity';

export abstract class INotificationServices {
  abstract inHouseNotification?(notification: NotificationEntity);
}
