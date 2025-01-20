import { Module } from '@nestjs/common';
import { DataServicesModule } from 'src/framework/data-services/mongo/data-services.module';
import { DiscordServicesModule } from 'src/framework/notification-services/discord/discord-service.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserFactoryService } from '../users/user-factory.service';
import { DiscordService } from 'src/framework/notification-services/discord/discord.service';

@Module({
  imports: [
    // MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    DataServicesModule,
    DiscordServicesModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, UserFactoryService, DiscordService],
  exports: [AuthService],
})
export class AuthServiceModule {}
