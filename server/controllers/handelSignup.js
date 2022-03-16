require("env2")("config.env");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { postSign } = require("../database/queries");
const signupSchema = require("../utils/validation/signup-validation");

const postSignUp = (req, res) => {
  const { username, email } = req.body;
  try {
    signupSchema
      .validateAsync(req.body)
      .then((data) => bcrypt.hash(data.password, 8))
      .then((hashPassword) => postSign(username, email, hashPassword))
      .then((data) => {
        jwt.sign(
          { id: data.rows[0].id },
          process.env.privateKey,
          (err, token) => {
            if (err) {
              console.log(err);
            } else {
              res.cookie("id", token).redirect("/home");
            }
          }
        );
      });
  } catch (err) {
    console.log(err);
  }
};

module.exports = postSignUp;
