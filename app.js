const express = require('express');
const dotenv = require('dotenv');
const connectionToDb = require('./config/db');

dotenv.config({path: './config/config.env'});
connectionToDb();

const app = express();
const PORT = process.env.PORT || 3000;

const movieRouter = require('./routes/movies');
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');


app.use('/', movieRouter);
app.use('/user', usersRouter);
app.use('/auth', authRouter);


 

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})

