import { PaginationType } from 'src/core/types';
import { MarkAllNotificationsDto } from './dtos/mark-all-notifications.dto';

export type ICreateNotification = {
  title: string;
  content: string;
  type: string;
  user: string;
  from: string;
  post?: string;
};

export type IGetNotifications = PaginationType & {
  _id: string;
  title: string;
  content: string;
  type: string;
  clicked: boolean;
  user: string;
};

export type IClickedNotification = {
  notificationId: string;
};

export type FindByNotificationId = {
  notificationId: string;
};

export type IClickAllNotifications = MarkAllNotificationsDto & {};
