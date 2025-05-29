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
exports.SessionResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const session_service_1 = require("./session.service");
let SessionResolver = class SessionResolver {
    constructor(sessionService) {
        this.sessionService = sessionService;
    }
};
exports.SessionResolver = SessionResolver;
exports.SessionResolver = SessionResolver = __decorate([
    (0, graphql_1.Resolver)('Session'),
    __metadata("design:paramtypes", [session_service_1.SessionService])
], SessionResolver);
//# sourceMappingURL=session.resolver.js.map