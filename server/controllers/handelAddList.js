const { PostListQuery } = require("../database/queries");

const addListController = (req, res) => {
  const userId = req.cookies.id;
const idUser=(req.id);
  const userIdFinal = idUser.id;
  const { name, episodes, type, cover_url } = req.body;
  PostListQuery(name, episodes, type, cover_url, userIdFinal).then( data=>res.redirect("/home"))
  .catch((err) => {
    res.status(500).json({
      message: "INTERNAL SERVER ERROR",
    });
  });
};

module.exports = addListController;
