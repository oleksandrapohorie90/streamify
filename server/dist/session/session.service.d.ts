import { ConfigService } from '@nestjs/config';
import type { Request } from 'express';
import { PrismaService } from '../core/prisma/prisma.service';
import { RedisService } from '../core/redis/redis.service';
import { LoginInput } from './inputs/login.input';
export declare class SessionService {
    private readonly prismaService;
    private readonly redisService;
    private readonly configService;
    constructor(prismaService: PrismaService, redisService: RedisService, configService: ConfigService);
    login(req: Request, input: LoginInput, userAgent: string): Promise<unknown>;
    logout(req: Request): Promise<unknown>;
}
