const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();

// router
const contentesRouter = require('./app/api/v1/contents/router');
const authRouter = require('./app/api/v1/auth/router');
const talentsRouter = require('./app/api/v1//accounts/router');
const userRouter = require('./app/api/v1/users/router');


const v1 = '/api/v1/cms';

const notFoundMiddleware = require('./app/middlewares/not-found');
const errorHandlerMiddleware = require('./app/middlewares/handler-error');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.status(200).json({
        message: "Welcome to API Semina"
    });
});

app.use(v1, contentesRouter);
app.use(v1, userRouter);
app.use(v1, talentsRouter);
app.use(v1, authRouter);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);
module.exports = app;
