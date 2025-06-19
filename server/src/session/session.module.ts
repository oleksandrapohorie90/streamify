/**
 * debugged
 * SessionResolver is registered

✅ SessionService is registered

✅ This module is already imported into AppModule (you confirmed earlier)
 */
import { Module } from '@nestjs/common';
import { SessionService } from './session.service';
import { SessionResolver } from './session.resolver';

@Module({
  providers: [SessionResolver, SessionService],
})
export class SessionModule {}
