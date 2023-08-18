"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const axios_1 = __importDefault(require("axios"));
const querystring_1 = __importDefault(require("querystring"));
const user_1 = __importDefault(require("../user"));
const router = express_1.default.Router();
const SPOTIFY_CLIENT_ID = 'e56bc5a5dec2486a9cc4ff2320b23cc9';
const SPOTIFY_CLIENT_SECRET = '2990684dc602410696586ccd60987dee';
const REDIRECT_URI = 'http://localhost:3001/auth/callback';
router.get('/login', (req, res) => {
    console.log("Login route is accessed");
    const scopes = 'user-read-private user-read-email';
    const redirectUrl = 'https://accounts.spotify.com/authorize' +
        '?response_type=code' +
        '&client_id=' + SPOTIFY_CLIENT_ID +
        (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
        '&redirect_uri=' + encodeURIComponent(REDIRECT_URI);
    console.log("Redirecting to:", redirectUrl); // 
    res.redirect(redirectUrl);
});
router.get('/callback', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Callback route is accessed"); // 
    const code = typeof req.query.code === 'string' ? req.query.code : null;
    if (code) {
        try {
            const response = yield axios_1.default.post('https://accounts.spotify.com/api/token', querystring_1.default.stringify({
                code,
                redirect_uri: REDIRECT_URI,
                grant_type: 'authorization_code'
            }), {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': 'Basic ' + (Buffer.from(SPOTIFY_CLIENT_ID + ':' + SPOTIFY_CLIENT_SECRET).toString('base64'))
                }
            });
            const data = response.data;
            console.log("Tokens obtained:", data); // 
            const accessToken = data.access_token;
            const refreshToken = data.refresh_token;
            yield user_1.default.create({ refreshToken: refreshToken });
            res.redirect(`http://localhost:3000/dashboard?token=${accessToken}`);
        }
        catch (error) {
            console.error('Erreur lors de l\'obtention des tokens', error);
            res.redirect('/login?error=token_fetch_failed');
        }
    }
    else {
        console.warn("Code is missing from the callback response"); // 
        res.redirect('/login?error=code_missing');
    }
}));
router.get('/refresh_token', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Refresh token route is accessed"); //
    const user = yield user_1.default.findOne();
    if (!user) {
        console.warn("User not found or refresh token missing"); // 
        return res.status(400).send("Refresh token manquant");
    }
    try {
        const response = yield axios_1.default.post('https://accounts.spotify.com/api/token', querystring_1.default.stringify({
            grant_type: 'refresh_token',
            refresh_token: user.refreshToken
        }), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + (Buffer.from(SPOTIFY_CLIENT_ID + ':' + SPOTIFY_CLIENT_SECRET).toString('base64'))
            }
        });
        const data = response.data;
        console.log("New access token obtained:", data);
        const newAccessToken = data.access_token;
        res.json({
            accessToken: newAccessToken
        });
    }
    catch (error) {
        console.error('Erreur lors du rafraîchissement du token', error);
        res.status(500).send('Erreur lors du rafraîchissement du token');
    }
}));
exports.default = router;
