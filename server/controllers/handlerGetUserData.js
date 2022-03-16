const { listQuery, getUsers } = require("../database/queries");

const getUserData = (req, res) => {
  const idUser = req.id;
  const userIdFinal = idUser.id;
  const getusers = getUsers(userIdFinal);
  const listQu = listQuery(userIdFinal);
  Promise.all([getusers, listQu])
    .then((values) => {
      res.json([values[0].rows, values[1].rows]);
    })
    .catch((e) => console.error(e));
};

module.exports = getUserData;
