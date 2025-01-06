import { Injectable } from '@nestjs/common';
import { OptionalQuery } from 'src/core/types';
import { UserEntity } from './entities/users.entity';

@Injectable()
export class UserFactoryService {
  create(data: OptionalQuery<UserEntity>) {
    const user = new UserEntity();
    Object.assign(user, data);
    return user;
  }
}
