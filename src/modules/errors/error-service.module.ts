import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DiscordServicesModule } from 'src/framework/notification-services/discord/discord-service.module';
import { DataServicesModule } from '../../framework/data-services/mongo/data-services.module';
import { Error, ErrorSchema } from './schemas/error.schema';
import { ErrorFactoryService } from './errors-factory.service';
import { ErrorsService } from './errors.service';
import { ErrorController } from './error.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Error.name, schema: ErrorSchema }]),
    DataServicesModule,
    DiscordServicesModule,
  ],
  controllers: [ErrorController],
  providers: [ErrorFactoryService, ErrorsService],
  exports: [ErrorFactoryService, ErrorsService],
})
export class ErrorServiceModule {}
