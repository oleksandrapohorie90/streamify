"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAgent = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
exports.UserAgent = (0, common_1.createParamDecorator)((data, ctx) => {
    if (ctx.getType() === 'http') {
        const request = ctx.switchToHttp().getRequest();
        return request.headers['user-agent'];
    }
    const context = graphql_1.GqlExecutionContext.create(ctx);
    return context.getContext().req.headers['user-agent'];
});
//# sourceMappingURL=user-agent.decorator.js.map