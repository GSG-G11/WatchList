const express = require('express');
const path = require('path');
const compression = require('compression');
const router = require('./routes/route')
const app = express();
app.use(compression());
app.disable('x-powered-by');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'html','signUp.html'));
  });
app.use(router)
module.exports = app;
