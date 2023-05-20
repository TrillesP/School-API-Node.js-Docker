const express = require('express');
const loginRoute = require('./routes/loginRoute');
// const userRoutes = require('./routes/userRoutes');
// const categoriesRoutes = require('./routes/categoriesRoutes');
// const postRoutes = require('./routes/postRoutes');
const app = express();

app.use(express.json());

app.use('/login', loginRoute);

// app.use('/user', userRoutes);

// app.use('/categories', categoriesRoutes);

// app.use('/post', postRoutes);

module.exports = app;