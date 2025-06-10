import { ConfigService } from '@nestjs/config';
import type { Request } from 'express';
import type { User } from '../../../prisma/generated';
import { SessionMetadata } from '../types/session-metadata.types';
export declare function saveSession(req: Request, user: User, metadata: SessionMetadata): Promise<unknown>;
export declare function destroySession(req: Request, configService: ConfigService): Promise<unknown>;
