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

    const result = await this.sessionService.login(req, input, userAgent);
    return result.user;
  }

  @Mutation(() => Boolean)
  async logoutUser(@Context() context: GqlContext): Promise<boolean> {
    const { req } = context;
    await this.sessionService.logout(req);
    return true;
  }
  }

  
//   @Resolver('Session')
//   export class SessionResolver {
// 	  public constructor(private readonly sessionService: SessionService) {}
  
// 	  @Authorization()
// 	  @Query(() => [SessionModel], { name: 'findSessionsByUser' })
// 	  public async findByUser(@Context() { req }: GqlContext) {
// 		  return this.sessionService.findByUser(req)
// 	  }
  
// 	  @Authorization()
// 	  @Query(() => SessionModel, { name: 'findCurrentSession' })
// 	  public async findCurrent(@Context() { req }: GqlContext) {
// 		  return this.sessionService.findCurrent(req)
// 	  }
  
// 	  @Mutation(() => AuthModel, { name: 'loginUser' })
// 	  public async login(
// 		  @Context() { req }: GqlContext,
// 		  @Args('data') input: LoginInput,
// 		  @UserAgent() userAgent: string
// 	  ) {
// 		  return this.sessionService.login(req, input, userAgent)
// 	  }
  
// 	  @Authorization()
// 	  @Mutation(() => Boolean, { name: 'logoutUser' })
// 	  public async logout(@Context() { req }: GqlContext) {
// 		  return this.sessionService.logout(req)
// 	  }
  
// 	  @Mutation(() => Boolean, { name: 'clearSessionCookie' })
// 	  public async clearSession(@Context() { req }: GqlContext) {
// 		  return this.sessionService.clearSession(req)
// 	  }
  
// 	  @Authorization()
// 	  @Mutation(() => Boolean, { name: 'removeSession' })
// 	  public async remove(
// 		  @Context() { req }: GqlContext,
// 		  @Args('id') id: string
// 	  ) {
// 		  return this.sessionService.remove(req, id)
// 	  }