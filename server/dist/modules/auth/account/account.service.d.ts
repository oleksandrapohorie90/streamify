import { PrismaService } from 'src/core/prisma/prisma.service';
import { CreateUserInput } from '../account/inputs/create-user.input';
export declare class AccountService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    findAll(): Promise<{
        username: string;
        email: string;
        password: string;
        id: string;
        displayName: string;
        avatar: string | null;
        bio: string | null;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    me(id: string): Promise<{
        username: string;
        email: string;
        password: string;
        id: string;
        displayName: string;
        avatar: string | null;
        bio: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    create(input: CreateUserInput): Promise<boolean>;
}
