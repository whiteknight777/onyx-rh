const proxy = require("http-proxy-middleware");
const morgan = require("morgan");

const ALLOWED_ORIGINS = "https://master.d3c7umzhd3tk9k.amplifyapp.com";
// const ALLOWED_ORIGINS = "http://localhost:3005";

module.exports = (app) => {
  app.use(
    "/api",
    proxy({
      target: ALLOWED_ORIGINS,
      changeOrigin: true,
    })
  );

  app.use(morgan("combined"));
};
