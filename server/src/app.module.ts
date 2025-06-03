import { Module } from '@nestjs/common';
 import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RedisModule } from './core/redis/redis.module';
 import { AccountModule } from './modules/auth/account/account.module';
import { SessionModule } from './session/session.module';

// @Module({
//   imports: [RedisModule, AccountModule, SessionModule],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      context: ({ req, res }) => ({ req, res }),
      // formatError: (error: any) => {
      //   const statusCode =
      //     error?.originalError?.status ||
      //     error?.originalError?.statusCode ||
      //     500;
      
      //   return {
      //     message: error.message,
      //     path: error.path,
      //     statusCode,
      //   };
      // },
    }),
    RedisModule,
    AccountModule,
    SessionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
