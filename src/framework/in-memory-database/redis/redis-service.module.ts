import { Global, Module } from '@nestjs/common';
import { IInMemoryServices } from 'src/core/abstracts/in-memory.abstract';
import { InMemoryCacheService } from './redis-service.service';
import config from './redis-config';
import { CacheModule, CacheStore } from '@nestjs/cache-manager';
import { RedisClientOptions } from 'redis';
import { redisStore } from 'cache-manager-redis-store';

@Global()
@Module({
  imports: [
    CacheModule.register<RedisClientOptions>({
      store: redisStore as unknown as CacheStore,
      url: 'redis://localhost:6380',
      ...config,
    }),
  ],
  providers: [
    {
      provide: IInMemoryServices,
      useClass: InMemoryCacheService,
    },
  ],
  exports: [IInMemoryServices],
})
export class RedisServiceModule {}
