if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();
const passport = require('passport');
const session = require('express-session');
const initializePassport = require('./passport-config');

initializePassport(passport);
const authRouter = require('./routes/auth');
const employeesRouter = require('./routes/employees');
const documentsRouter = require('./routes/documents');

app.use(cors({
    credentials: true,
    origin(origin, callback) {
        // allow requests with no origin
        if (ALLOWED_ORIGINS.indexOf(origin) !== -1 || !origin) {
            return callback(null, true);
        }
        const msg = 'The CORS policy for this site does not '
            + 'allow access from the specified Origin.';
        return callback(new Error(msg), false);
    }
}));

// eslint-disable-next-line
let {PORT, HOST, ALLOWED_ORIGINS, SESSION_SECRET} = process.env;
ALLOWED_ORIGINS = ALLOWED_ORIGINS.split(',');

// CONFIGURATION
app.use(cookieParser());
app.use(express.json());
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use('/auth', authRouter);
app.use('/employees', employeesRouter);
app.use('/documents', documentsRouter);

// DB CONNECTION
const db = require('./db/index');

db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to database'));

app.listen(PORT, () => console.log(`Server started on ${HOST}:${PORT}`));
