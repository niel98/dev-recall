import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DiscordServicesModule } from './framework/notification-services/discord/discord-service.module';
import { DataServicesModule } from './framework/data-services/mongo/data-services.module';
import { NotificationServiceModule } from './modules/notifications/notification-service.module';
import { ErrorServiceModule } from './modules/errors/error-service.module';
import { UserServiceModule } from './modules/users/user-service.module';
import { AuthServiceModule } from './modules/auth/auth-service.module';
import { JWT_USER_PAYLOAD_TYPE } from './lib/constants';
import { RedisServiceModule } from './framework/in-memory-database/redis/redis-service.module';

declare global {
  namespace Express {
    export interface Request {
      user?: JWT_USER_PAYLOAD_TYPE;
      // admin?: Admin;
    }
  }
  var io: any;
}

@Module({
  imports: [
    DataServicesModule,
    DiscordServicesModule,
    NotificationServiceModule,
    ErrorServiceModule,
    UserServiceModule,
    AuthServiceModule,
    RedisServiceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply().forRoutes('*');
  }
}
