import { ConfigService } from '@nestjs/config';
import type { Request } from 'express';
import type { User } from '../../../prisma/generated';
export declare function saveSession(req: Request, user: User): Promise<unknown>;
export declare function destroySession(req: Request, configService: ConfigService): Promise<unknown>;
