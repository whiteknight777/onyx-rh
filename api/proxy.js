const proxy = require('http-proxy-middleware');
const morgan = require('morgan');

let { ALLOWED_ORIGINS } = process.env;
ALLOWED_ORIGINS = ALLOWED_ORIGINS.split(',');

module.exports = app => {
    app.use(
        '/api',
        proxy({
            target: ALLOWED_ORIGINS[0],
            changeOrigin: true
        }),
    );

    app.use(morgan('combined'));
};
