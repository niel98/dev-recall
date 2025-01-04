import {
  Notification,
  NotificationSchema,
} from 'src/modules/notifications/schemas/notification.schema';

export const SCHEMA_LIST = [
  //   {
  //     name: User.name,
  //     schema: UserSchema,
  //   },
  {
    name: Notification.name,
    schema: NotificationSchema,
  },
];
