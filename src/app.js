const express = require('express');
const loginRoute = require('./routes/loginRoute');
const teachersRoute = require('./routes/teachersRoute');
const classesRoute = require('./routes/classesRoute');
// const postRoutes = require('./routes/postRoutes');
const app = express();

app.use(express.json());

app.use('/login', loginRoute);

app.use('/teachers', teachersRoute);

app.use('/classes', classesRoute);

// app.use('/post', postRoutes);

module.exports = app;