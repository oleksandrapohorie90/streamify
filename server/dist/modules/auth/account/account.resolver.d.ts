import { AccountService } from './account.service';
import { UserModel } from './models/user.model';
export declare class AccountResolver {
    private readonly accountService;
    constructor(accountService: AccountService);
    findAll(): Promise<UserModel[]>;
}
