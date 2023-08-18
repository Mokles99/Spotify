"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_session_1 = __importDefault(require("express-session"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const app = (0, express_1.default)();
const PORT = 3001;
app.use((0, cors_1.default)({ credentials: true, origin: 'http://localhost:3000' }));
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, express_session_1.default)({
    secret: '2990684dc602410696586ccd60987dee',
    resave: false,
    saveUninitialized: false
}));
app.use('/auth', authRoutes_1.default);
app.get('/', (req, res) => {
    res.send('Hello Mokk');
});
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
