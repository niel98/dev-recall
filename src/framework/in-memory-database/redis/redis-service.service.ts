import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable, Logger } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { IInMemoryServices } from 'src/core/abstracts/in-memory.abstract';

@Injectable()
export class InMemoryCacheService implements IInMemoryServices {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  async set(key: string, value: any): Promise<boolean> {
    try {
      await this.cacheManager.set(key, value);

      return true;
    } catch (e) {
      Logger.error('@in-memory-cache-manager-set', e);
    }
    return false;
  }

  /**
   * @param key the key to use to set and retrieve the value
   * @param value the actual value to be saved under a key for example 5.0, 'boy' or 'computer' or []
   * @param timeInMillisOrSeconds the time can be milliseconds or seconds depending on the version of cache manager installed.
   * @return boolean
   */
  async add(
    key: string,
    value: any,
    timeInMilliSecsOrSeconds = 604800,
  ): Promise<boolean> {
    try {
      await this.cacheManager.set(key, value, timeInMilliSecsOrSeconds);

      await this.cacheManager.get(key);
      return true;
    } catch (e) {
      Logger.error('@cache-manager-service-add', e);
    }
    return false;
  }

  async get(key: string) {
    try {
      const value = await this.cacheManager.get(key);

      return value;
    } catch (e) {
      Logger.error('@in-memory-cache-manager-get', e);
    }
    return null;
  }

  async del(key: string): Promise<boolean> {
    try {
      await this.cacheManager.del(key);
      return true;
    } catch (e) {
      Logger.error('@in-memory-cache-manager-del', e);
    }
    return false;
  }

  async clearAll(): Promise<void> {
    try {
      await this.cacheManager.clear();
    } catch (e) {
      Logger.error('@cache-manager-service-clear-all', e);
    }
  }

  async ttl(key: string): Promise<number> {
    try {
      const value = await (this.cacheManager as any).store.ttl(key);
      return value || 0;
    } catch (e) {
      Logger.error('@cache-manager-redis-ttl', e);
    }
    return 0;
  }

  async delWithKeyPattern(route: string): Promise<number> {
    // Get keys that match the pattern
    const keysToDelete = await (this.cacheManager as any).store.keys(route);

    // Check if there are keys to delete
    if (keysToDelete.length === 0) {
      return 0; // No keys found
    }

    // Delete keys
    const deletedCount = await (this.cacheManager as any).del(...keysToDelete);

    return deletedCount;
  }

  async getWithKeyPattern(pattern: string) {
    try {
      // Get keys that match the pattern
      const keys = await (this.cacheManager as any).keys(pattern);

      if (keys.length === 0) {
        return []; // No keys found
      }

      const data = await (this.cacheManager as any).mget(keys);
      if (data.length === 0) {
        return []; // No keys found
      }

      return data;
    } catch (e) {
      Logger.error('@in-memory-cache-manager-get-with-pattern', e);
    }
  }

  async checkConnection() {
    try {
      const store = (this.cacheManager as any).store;
      console.log('Redis store details:', {
        isConnected: store.connected,
        connectionOptions: store.options,
        status: store.status,
      });

      // Try to ping Redis
      await store.ping();
      console.log('Redis ping successful');

      return true;
    } catch (e) {
      console.error('Redis connection check failed:', e);
      return false;
    }
  }
}
