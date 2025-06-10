import { ConfigService } from '@nestjs/config';
import type { Request } from 'express';
import { PrismaService } from '../core/prisma/prisma.service';
import { LoginInput } from './inputs/login.input';
export declare class SessionService {
    private readonly prisma;
    private readonly configService;
    prismaService: any;
    redisService: any;
    constructor(prisma: PrismaService, configService: ConfigService);
    login(req: Request, input: LoginInput, userAgent: string): Promise<unknown>;
    logout(req: Request): Promise<boolean>;
    findByUser(req: Request): Promise<any[]>;
    findCurrent(req: Request): Promise<any>;
    clearSession(req: Request): Promise<boolean>;
    remove(req: Request, id: string): Promise<boolean>;
}
