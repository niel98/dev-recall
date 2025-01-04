import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DiscordServicesModule } from './framework/notification-services/discord/discord-service.module';
import { DataServicesModule } from './framework/data-services/mongo/data-services.module';
import { NotificationServiceModule } from './modules/notifications/notification-service.module';

@Module({
  imports: [
    DataServicesModule,
    DiscordServicesModule,
    NotificationServiceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply().forRoutes('*');
  }
}
