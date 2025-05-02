import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { Module } from '@nestjs/common';
import { getGraphQLConfig } from './prisma/config/graphql.config';
import { PrismaModule } from '../core/prisma/prisma.module';
import { AccountModule } from '../modules/auth/account/account.module';
import { RedisModule } from './redis/redis.module';

// GraphQLModule.forRootAsync({
//     driver: ApolloDriver,
//     imports: [ConfigModule],
//     useFactory: getGraphQLConfig,
//     inject: [ConfigService]
//   }),
//   PrismaModule

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    PrismaModule,
    AccountModule,
    RedisModule,
  ],
})
export class CoreModule {}
