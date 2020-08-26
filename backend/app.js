const express = require('express');
const bodyparser = require('body-parser')
require('./src/config/db')

const taskRouter = require('./src/controllers/task')
var app = express()

app.use(bodyparser.json())
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
});
app.use('/task', taskRouter)

module.exports = app
