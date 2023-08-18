import express from 'express';
import axios from 'axios';
import qs from 'querystring';
import User from '../user'

const router = express.Router();

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
    
    console.log("Redirecting to:", redirectUrl);  // 
    res.redirect(redirectUrl);
});

router.get('/callback', async (req, res) => {
    console.log("Callback route is accessed");  // 

    const code = typeof req.query.code === 'string' ? req.query.code : null;
    if (code) {
        try {
            const response = await axios.post('https://accounts.spotify.com/api/token', qs.stringify({
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
            console.log("Tokens obtained:", data);  // 

            const accessToken = data.access_token;
            const refreshToken = data.refresh_token;
            await User.create({ refreshToken: refreshToken }); 


res.redirect(`http://localhost:3000/dashboard?token=${accessToken}`);
        } catch (error) {
            console.error('Erreur lors de l\'obtention des tokens', error);
            res.redirect('/login?error=token_fetch_failed');
        }
    } else {
        console.warn("Code is missing from the callback response");  // 
        res.redirect('/login?error=code_missing');
    }
});

router.get('/refresh_token', async (req, res) => {
    console.log("Refresh token route is accessed");  //

    const user = await User.findOne(); 

    if (!user) {
        console.warn("User not found or refresh token missing");  // 
        return res.status(400).send("Refresh token manquant");
    }

    try {
        const response = await axios.post('https://accounts.spotify.com/api/token', qs.stringify({
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

    } catch (error) {
        console.error('Erreur lors du rafraîchissement du token', error);
        res.status(500).send('Erreur lors du rafraîchissement du token');
    }
});

export default router;
