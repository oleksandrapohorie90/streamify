import type { User } from 'prisma/generated';
export declare class UserModel implements User {
    id: string;
    email: string;
    password: string;
    username: string;
    displayName: string;
    avatar: string;
    bio: string;
    createdAt: Date;
    updatedAt: Date;
}
