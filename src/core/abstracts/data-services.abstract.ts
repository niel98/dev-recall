import { Notification } from 'src/modules/notifications/entities/notification.entity';
import { IGenericRepository } from './generic-repository.abstract';

export abstract class IDataServices {
  abstract notification: IGenericRepository<Notification>;
}
