// src/session/session.resolver.ts
import { Resolver, Mutation, Args, Context } from '@nestjs/graphql';
import { SessionService } from './session.service';
import { LoginInput } from './inputs/login.input';
import { UserModel } from '../modules/auth/account/models/user.model';
import type { GqlContext } from '../shared/types/gql-context.types';

@Resolver()
export class SessionResolver {
  constructor(private readonly sessionService: SessionService) {}

  @Mutation(() => UserModel)
  async loginUser(
    @Args('input') input: LoginInput,
    @Context() context: GqlContext,
  ) {
    const { req } = context;
    const userAgent = req.headers['user-agent'] || 'unknown';
    const result = await this.sessionService.login(req, input, userAgent) as { user: UserModel };
    return result.user;
  }
}

