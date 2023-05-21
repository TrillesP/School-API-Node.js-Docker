const express = require('express');
const loginRoute = require('./routes/loginRoute');
const teachersRoute = require('./routes/teachersRoute');
const classesRoute = require('./routes/classesRoute');
const studentsRoute = require('./routes/studentsRoute');
const classesWithStudentRoute = require('./routes/classesWithStudentRoute');
const studentsInClassRoute = require('./routes/studentsInClassRoute');
const app = express();

app.use(express.json());

app.use('/login', loginRoute);

app.use('/teachers', teachersRoute);

app.use('/classes', classesRoute);

app.use('/students', studentsRoute);

app.use('/classes-with-student', classesWithStudentRoute);

app.use('/students-in-class', studentsInClassRoute);

module.exports = app;