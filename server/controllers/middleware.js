/* eslint-disable no-unused-vars */
const jwt = require("jsonwebtoken");

const isAuthProtected = (req, res, next) => {
    const { id } = req.cookies;
    if (id) {
      jwt.verify(id, process.env.privateKey, (err, id) => {
        if (err) {
          res.clearCookie('id');
          res.redirect('/');
        }else{
          req.id = id;
          next();
        }
      });
    }
    else {
      res.redirect('/');
    }
  };

  const isUserLogined = (req, res, next) => {
    const { id } = req.cookies;
    if (id) {
      jwt.verify(id, process.env.privateKey, (err, id) => {
        if (err) {
          next()
        }else{
          res.redirect('/home');
        }
      });
    }else{
      next()
    }
  };

  module.exports = {isAuthProtected, isUserLogined};