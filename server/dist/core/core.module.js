"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoreModule = void 0;
const apollo_1 = require("@nestjs/apollo");
const config_1 = require("@nestjs/config");
const graphql_1 = require("@nestjs/graphql");
const common_1 = require("@nestjs/common");
const graphql_config_1 = require("./prisma/config/graphql.config");
const prisma_module_1 = require("../core/prisma/prisma.module");
const account_module_1 = require("../modules/auth/account/account.module");
const redis_module_1 = require("./redis/redis.module");
let CoreModule = class CoreModule {
};
exports.CoreModule = CoreModule;
exports.CoreModule = CoreModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            graphql_1.GraphQLModule.forRootAsync({
                driver: apollo_1.ApolloDriver,
                imports: [config_1.ConfigModule],
                useFactory: graphql_config_1.getGraphQLConfig,
                inject: [config_1.ConfigService]
            }),
            prisma_module_1.PrismaModule,
            account_module_1.AccountModule,
            redis_module_1.RedisModule,
        ],
    })
], CoreModule);
//# sourceMappingURL=core.module.js.map