import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DiscordServicesModule } from 'src/framework/notification-services/discord/discord-service.module';
import { DataServicesModule } from '../../framework/data-services/mongo/data-services.module';
import { User, UserSchema } from './schemas/user.schema';
import { UserFactoryService } from './user-factory.service';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    DataServicesModule,
    DiscordServicesModule,
  ],
  controllers: [UserController],
  providers: [UserFactoryService, UserService],
  exports: [UserFactoryService, UserService],
})
export class UserServiceModule {}
