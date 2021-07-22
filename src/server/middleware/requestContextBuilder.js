export default function requestContextBuilder(req, res, next){

    if (req.path.startsWith("/")) {
        global.logger.info("skipped requestContextBuilder");
        return next();
    }
    const requestContext = {
      language: "en",
      country: "US",
        userIp: req.headers["x-forwarded-for"] || req.connection.remoteAddress || req.socket.remoteAddress || null
    };
    req.requestContext = requestContext;
    return next();
}