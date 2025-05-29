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
exports.AccountResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const account_service_1 = require("./account.service");
const user_model_1 = require("./models/user.model");
const create_user_input_1 = require("./inputs/create-user.input");
let AccountResolver = class AccountResolver {
    constructor(accountService) {
        this.accountService = accountService;
    }
    async findAll() {
        return this.accountService.findAll();
    }
    async create(input) {
        return this.accountService.create(input);
    }
};
exports.AccountResolver = AccountResolver;
__decorate([
    (0, graphql_1.Query)(() => [user_model_1.UserModel], { name: 'findAllUsers' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AccountResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Mutation)(() => Boolean, { name: 'createUser' }),
    __param(0, (0, graphql_1.Args)('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_input_1.CreateUserInput]),
    __metadata("design:returntype", Promise)
], AccountResolver.prototype, "create", null);
exports.AccountResolver = AccountResolver = __decorate([
    (0, graphql_1.Resolver)('Account'),
    __metadata("design:paramtypes", [account_service_1.AccountService])
], AccountResolver);
//# sourceMappingURL=account.resolver.js.map