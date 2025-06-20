import { Module } from '@nestjs/common'; //debugged
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RedisModule } from './core/redis/redis.module';
import { AccountModule } from './modules/auth/account/account.module';
import { SessionModule } from './session/session.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';

// @Module({
//   imports: [
//     GraphQLModule.forRoot<ApolloDriverConfig>({
//       driver: ApolloDriver,
//       autoSchemaFile: join(process.cwd(), 'src/schema.gql'), //checked this line
//       context: ({ req, res }) => ({ req, res }),
//       // formatError: (error: any) => {
//       //   const statusCode =
//       //     error?.originalError?.status ||
//       //     error?.originalError?.statusCode ||
//       //     500;
      
//       //   return {
//       //     message: error.message,
//       //     path: error.path,
//       //     statusCode,
//       //   };
//       // },
//     }),
//     RedisModule,
//     AccountModule,
//     SessionModule,
//   ],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      context: ({ req, res }) => ({ req, res }),
    }),
    RedisModule,
    AccountModule,
    SessionModule, // ✅ required
  ],
  controllers: [AppController],
  providers: [AppService], // ✅ DO NOT add SessionResolver here directly
})
export class AppModule {}