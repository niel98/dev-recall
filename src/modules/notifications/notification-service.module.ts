import { Module } from '@nestjs/common';
import {
  Notification,
  NotificationSchema,
} from './schemas/notification.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { DiscordServicesModule } from 'src/framework/notification-services/discord/discord-service.module';
import { NotificationController } from './notification.controller';
import { DataServicesModule } from '../../framework/data-services/mongo/data-services.module';
import { NotificationFactoryService } from './notification-factory.service';
import { NotificationService } from './notification.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Notification.name, schema: NotificationSchema },
    ]),
    DataServicesModule,
    DiscordServicesModule,
  ],
  controllers: [NotificationController],
  providers: [NotificationFactoryService, NotificationService],
  exports: [NotificationFactoryService, NotificationService],
})
export class NotificationServiceModule {}
