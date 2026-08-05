"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginSchema = exports.signupSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.signupSchema = {
    body: zod_1.default.strictObject({
        name: zod_1.default.string(),
        email: zod_1.default.email(),
        password: zod_1.default.string().regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[-!@#$%^&*(()_])(?=.*[0-9]).{8,}$/),
        phone: zod_1.default.string(),
        age: zod_1.default.number(),
        gender: zod_1.default.number(),
        isOnline: zod_1.default.boolean().optional(),
        isActive: zod_1.default.boolean().optional(),
        provider: zod_1.default.number().optional(),
        role: zod_1.default.number().optional(),
        bio: zod_1.default.string().optional()
    })
};
exports.loginSchema = {
    body: zod_1.default.strictObject({
        email: zod_1.default.email(),
        password: zod_1.default.string().regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[-!@#$%^&*(()_])(?=.*[0-9]).{8,}$/),
    })
};
