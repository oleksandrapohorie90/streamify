import { SessionService } from './session.service';
import { LoginInput } from './inputs/login.input';
import type { GqlContext } from '../shared/types/gql-context.types';
export declare class SessionResolver {
    private readonly sessionService;
    constructor(sessionService: SessionService);
    loginUser(input: LoginInput, context: GqlContext): Promise<{
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
    logoutUser(context: GqlContext): Promise<boolean>;
}
