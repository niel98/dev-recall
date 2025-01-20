import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LOGS_LEVEL, PORT } from './config';
import { Logger, ValidationPipe, VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: LOGS_LEVEL(),
  });

  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
  });

  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();

  app.enableShutdownHooks();

  await app.listen(PORT, () => {
    Logger.log(`Dev-recall server listening on port ${PORT} 🚀💥`);
  });
}
bootstrap();
