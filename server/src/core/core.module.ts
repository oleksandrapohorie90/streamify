import { ApolloDriver } from "@nestjs/apollo";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { getGraphQLConfig } from "./prisma/config/graphql.config";
import { PrismaModule } from "../core/prisma/prisma.module";

GraphQLModule.forRootAsync({
    driver: ApolloDriver,
    imports: [ConfigModule],
    useFactory: getGraphQLConfig,
    inject: [ConfigService]
  }),
  PrismaModule

