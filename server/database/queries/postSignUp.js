const connection = require("../config/connection");
const postSignUp = (username, email, password) =>
  connection.query(
    "INSERT INTO users(username, email, password) VALUES ($1, $2, $3) returning *;",
    [username, email, password]
  );
module.exports = postSignUp;
