const connection = require("../config/connection");

const getUsers = (id) =>
  connection.query({
    text: "select username from users where id=$1;",
    values: [id],
  });

module.exports = getUsers;
