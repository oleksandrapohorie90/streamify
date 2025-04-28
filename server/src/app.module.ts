import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RedisModule } from './core/redis/redis.module';
import { AccountModule } from './modules/auth/account/account.module';

@Module({
  imports: [RedisModule, AccountModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}