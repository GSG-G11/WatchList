const express = require('express');
const path = require('path');
const compression = require('compression');


const app = express();
app.use(compression());
app.disable('x-powered-by');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '..', 'public')));



module.exports = app;
