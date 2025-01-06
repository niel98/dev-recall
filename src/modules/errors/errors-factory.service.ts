import { Injectable } from '@nestjs/common';
import { OptionalQuery } from 'src/core/types';
import { ErrorEntity } from './entities/error.entity';

@Injectable()
export class ErrorFactoryService {
  create(data: OptionalQuery<ErrorEntity>) {
    const error = new ErrorEntity();
    Object.assign(error, data);
    return error;
  }
}
