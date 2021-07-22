import bodyParser from "body-parser";
import expressSanitized from "express-sanitize-escape";

const preProcessor = (app) => {
    // Disable x-powered by Express
    app.disable("x-powered-by");
    // support json encoded bodies
    app.use(bodyParser.json());
    //support encoded bodies
    app.use(bodyParser.urlencoded({ extended: true}));
    // Sanitize request data for XSS
    app.use(expressSanitized());

    return (next) => {
        next();
    };

};

export default preProcessor;