import { Error, ErrorSchema } from 'src/modules/errors/schemas/error.schema';
import {
  Notification,
  NotificationSchema,
} from 'src/modules/notifications/schemas/notification.schema';
import { User, UserSchema } from 'src/modules/users/schemas/user.schema';

export const SCHEMA_LIST = [
  {
    name: Notification.name,
    schema: NotificationSchema,
  },
  {
    name: Error.name,
    schema: ErrorSchema,
  },
  {
    name: User.name,
    schema: UserSchema,
  },
];
