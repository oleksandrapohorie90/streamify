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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const session_service_1 = require("./session.service");
const login_input_1 = require("./inputs/login.input");
const user_model_1 = require("../modules/auth/account/models/user.model");
let SessionResolver = class SessionResolver {
    constructor(sessionService) {
        this.sessionService = sessionService;
    }
    async loginUser(input, context) {
        const { req } = context;
        const userAgent = req.headers['user-agent'] || 'unknown';
        const result = await this.sessionService.login(req, input, userAgent);
        return result.user;
    }
};
exports.SessionResolver = SessionResolver;
__decorate([
    (0, graphql_1.Mutation)(() => user_model_1.UserModel),
    __param(0, (0, graphql_1.Args)('input')),
    __param(1, (0, graphql_1.Context)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_input_1.LoginInput, Object]),
    __metadata("design:returntype", Promise)
], SessionResolver.prototype, "loginUser", null);
exports.SessionResolver = SessionResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [session_service_1.SessionService])
], SessionResolver);
//# sourceMappingURL=session.resolver.js.map