const express = require('express');
const app = express();
const path = require('path');
const compression = require('compression');
const router = require('./routes/route');
const cookieParser =require('cookie-parser');
const isAuthProtected = require('./controllers/middleware');
app.use(cookieParser());
app.use(compression());
app.disable('x-powered-by');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'html','signUp.html'));
  });
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'html','login.html'));
});

app.use(router);

module.exports = app;
