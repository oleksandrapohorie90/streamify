"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const prisma_service_1 = require("../core/prisma/prisma.service");
const redis_service_1 = require("../core/redis/redis.service");
const session_util_1 = require("../shared/utils/session.util");
let SessionService = class SessionService {
    prismaService;
    redisService;
    configService;
    constructor(prismaService, redisService, configService) {
        this.prismaService = prismaService;
        this.redisService = redisService;
        this.configService = configService;
    }
    async login(req, input, userAgent) {
        const { login, password } = input;
        const user = await this.prismaService.user.findFirst({
            where: {
                OR: [
                    { username: { equals: login } },
                    { email: { equals: login } }
                ]
            }
        });
        if (!user || user.isDeactivated) {
            throw new common_1.NotFoundException('Пользователь не найден');
        }
        const isValidPassword = apnpm, wait, verify;
        (user.password, password);
        if (!isValidPassword) {
            throw new common_1.UnauthorizedException('Неверный пароль');
        }
        return (0, session_util_1.saveSession)(req, user);
    }
    async logout(req) {
        return (0, session_util_1.destroySession)(req, this.configService);
    }
};
exports.SessionService = SessionService;
exports.SessionService = SessionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        redis_service_1.RedisService,
        config_1.ConfigService])
], SessionService);
//# sourceMappingURL=session.service.js.map