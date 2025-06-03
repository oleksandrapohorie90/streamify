"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Authorization = Authorization;
const common_1 = require("@nestjs/common");
const gql_auth_guard_1 = require("../guards/gql-auth.guard");
function Authorization() {
    return (0, common_1.applyDecorators)((0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard));
}
//# sourceMappingURL=auth.decorator.js.map