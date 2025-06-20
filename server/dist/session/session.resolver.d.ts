import { SessionService } from './session.service';
import { LoginInput } from './inputs/login.input';
import { UserModel } from '../modules/auth/account/models/user.model';
import type { GqlContext } from '../shared/types/gql-context.types';
export declare class SessionResolver {
    private readonly sessionService;
    constructor(sessionService: SessionService);
    loginUser(input: LoginInput, context: GqlContext): Promise<UserModel>;
}
