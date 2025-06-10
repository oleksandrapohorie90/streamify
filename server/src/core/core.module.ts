import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { Module } from '@nestjs/common';
import { getGraphQLConfig } from './prisma/config/graphql.config';
import { PrismaModule } from '../core/prisma/prisma.module';
import { AccountModule } from '../modules/auth/account/account.module';
import { RedisModule } from './redis/redis.module';


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRootAsync({
      driver: ApolloDriver,
      imports: [ConfigModule],
      useFactory: getGraphQLConfig,
      inject: [ConfigService]
    }),
    PrismaModule,
    AccountModule,
    RedisModule,
  ],
})
export class CoreModule {}
