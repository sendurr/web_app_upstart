import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import fs from "fs";
import logger from "morgan";
import config from "config";
import helmet from "helmet";

import "./global"
import preProcessor from "./middleware/requestPreProcessor";
import requestContextBuilder from "./middleware/requestContextBuilder";

const app = express();
const APPPORT = "3000";

// Need to add logger
// global.logger = logger

var indexRouter = require('../../routes/index');
var usersRouter = require('../../routes/users');



app.use(helmet());
app.use(helmet.noCache);
app.use(preProcessor(app));
app.use(requestContextBuilder);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
