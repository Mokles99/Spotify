"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("./database"));
const userSchema = new database_1.default.Schema({
    refreshToken: {
        type: String,
        required: true
    }
});
const User = database_1.default.model('User', userSchema);
exports.default = User;
