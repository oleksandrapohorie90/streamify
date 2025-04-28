"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRediDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_redis_dto_1 = require("./create-redis.dto");
class UpdateRediDto extends (0, mapped_types_1.PartialType)(create_redis_dto_1.CreateRediDto) {
}
exports.UpdateRediDto = UpdateRediDto;
//# sourceMappingURL=update-redis.dto.js.map