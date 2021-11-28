// eslint-disable-next-line
let ALLOWED_ORIGINS = process.env.ALLOWED_ORIGINS;
ALLOWED_ORIGINS = ALLOWED_ORIGINS.split(',');

const origin = {
    credentials: true,
    origin(origin, callback) {
        // allow requests with no origin
        if (ALLOWED_ORIGINS.indexOf(origin) !== -1 || !origin) {
            return callback(null, true);
        }
        const msg = 'The CORS policy for this site does not '
        + 'allow access from the specified Origin.';
        return callback(new Error(msg), false);
    },
};

module.export = origin;
