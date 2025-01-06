import { NotificationEntity } from 'src/modules/notifications/entities/notification.entity';
import { IGenericRepository } from './generic-repository.abstract';
import { ErrorEntity } from 'src/modules/errors/entities/error.entity';
import { UserEntity } from 'src/modules/users/entities/users.entity';

export abstract class IDataServices {
  abstract notifications: IGenericRepository<NotificationEntity>;
  abstract errors: IGenericRepository<ErrorEntity>;
  abstract users: IGenericRepository<UserEntity>;
}
