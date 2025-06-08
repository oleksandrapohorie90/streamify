import { ConfigService } from '@nestjs/config';
import type { Request } from 'express';
import { PrismaService } from '../core/prisma/prisma.service';
import { LoginInput } from './inputs/login.input';
export declare class SessionService {
    private readonly prisma;
    private readonly configService;
    constructor(prisma: PrismaService, configService: ConfigService);
    login(req: Request, input: LoginInput, userAgent: string): Promise<{
        user: {
            id: string;
            email: string;
            password: string;
            username: string;
            displayName: string;
            avatar: string | null;
            bio: string | null;
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
    logout(req: Request): Promise<boolean>;
}
