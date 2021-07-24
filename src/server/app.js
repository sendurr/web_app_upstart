import express from "express";
import http from "http";
import path from "path";
import cookieParser from "cookie-parser";
import fs from "fs";
import config from "config";
import helmet from "helmet";
import noCache from "nocache";

import "./global"
import preProcessor from "./middleware/requestPreProcessor";
import requestContextBuilder from "./middleware/requestContextBuilder";
import platformApiRoutes from "./apis/platformApiRoutes";
import db from "./models";

const app = express();
const APPPORT = process.env.PORT || "3000";

// Need to add logger
// global.logger = logger

app.use(helmet());
app.use(noCache());
app.use(preProcessor(app));
app.use(requestContextBuilder);

app.use('/', platformApiRoutes);

// Connect to database
db.sequelize.sync({force: true})
    .then(() => {
            global.logger.info("Database connection successful ");
            http.createServer(app)
                .listen(APPPORT, () => {
                        global.logger.info(`App server listening on port ${APPPORT}`);
                });
    })
    .catch((err) => global.logger.error(`Error connecting to database ${err}`));


