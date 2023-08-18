
import express from 'express';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import authRoutes from './routes/authRoutes';

const app = express();
const PORT = 3001;

app.use(cors({ credentials: true, origin: 'http://localhost:3000' })); 
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: '2990684dc602410696586ccd60987dee',
    resave: false,
    saveUninitialized: false
}));

app.use('/auth', authRoutes);
app.get('/', (req, res) => {
    res.send('Hello Mokk');
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
