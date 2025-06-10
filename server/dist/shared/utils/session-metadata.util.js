"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSessionMetadata = getSessionMetadata;
const geoip_lite_1 = require("geoip-lite");
const countries = require("i18n-iso-countries");
const DeviceDetector = require("device-detector-js");
const is_dev_util_1 = require("./is-dev.util");
countries.registerLocale(require('i18n-iso-countries/langs/en.json'));
function getSessionMetadata(req, userAgent) {
    const ip = is_dev_util_1.IS_DEV_ENV
        ? '173.166.164.121'
        : Array.isArray(req.headers['cf-connecting-ip'])
            ? req.headers['cf-connecting-ip'][0]
            : req.headers['cf-connecting-ip'] ||
                (typeof req.headers['x-forwarded-for'] === 'string'
                    ? req.headers['x-forwarded-for'].split(',')[0]
                    : req.ip);
    const location = (0, geoip_lite_1.lookup)(ip);
    const device = new DeviceDetector().parse(userAgent);
    return {
        location: {
            country: countries.getName(location?.country, 'en') || 'Неизвестно',
            city: location?.city || 'Неизвестно',
            latidute: location?.ll?.[0] || 0,
            longitude: location?.ll?.[1] || 0
        },
        device: {
            browser: device?.client?.name || 'Unknown',
            os: device?.os?.name || 'Unknown',
            type: device?.device?.type || 'Unknown'
        },
        ip
    };
}
//# sourceMappingURL=session-metadata.util.js.map