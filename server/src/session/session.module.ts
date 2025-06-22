// src/session/session.module.ts
import { Module } from '@nestjs/common';
import { SessionService } from './session.service';
import { SessionResolver } from './session.resolver';

@Module({
  providers: [SessionResolver, SessionService], // ✅ register both
  exports: [SessionService], // optional: export if used in other modules
})
export class SessionModule {}