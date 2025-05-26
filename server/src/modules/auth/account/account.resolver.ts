import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AccountService } from './account.service';
import { UserModel } from './models/user.model';
import { CreateUserInput } from './inputs/create-user.input';

@Resolver(() => UserModel)
export class AccountResolver {
  constructor(private readonly accountService: AccountService) {}

  @Query(() => [UserModel], { name: 'findAllUsers' })
  public async findAll(): Promise<UserModel[]> {
    return this.accountService.findAll();
  }

  @Mutation(() => UserModel, { name: 'createUser' })
  public async create(@Args('data') input: CreateUserInput): Promise<UserModel> {
    return this.accountService.create(input);
  }
}
