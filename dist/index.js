"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUserSchema = exports.registerUserSchema = void 0;
const zod_1 = require("zod");
exports.registerUserSchema = zod_1.z.object({
    name: zod_1.z.string().min(3, { message: "Please provide Valid Name" }),
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(6, {
        message: "Please enter strong password having atleast 6 characters",
    }),
});
exports.loginUserSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(6, { message: "Please enter valid password" }),
});
