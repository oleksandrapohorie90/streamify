"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveSession = saveSession;
exports.destroySession = destroySession;
const common_1 = require("@nestjs/common");
function saveSession(req, user, metadata) {
    return new Promise((resolve, reject) => {
        req.session.createdAt = new Date();
        req.session.userId = user.id;
        req.session.metadata = metadata;
        req.session.save(err => {
            if (err)
                return reject(new common_1.InternalServerErrorException('Session save failed'));
            resolve({ user });
        });
    });
}
function destroySession(req, configService) {
    return new Promise((resolve, reject) => {
        req.session.destroy(err => {
            if (err) {
                return reject(new common_1.InternalServerErrorException('Не удалось завершить сессию'));
            }
            req.res?.clearCookie(configService.getOrThrow('SESSION_NAME'));
            resolve(true);
        });
    });
}
//# sourceMappingURL=session.util.js.map