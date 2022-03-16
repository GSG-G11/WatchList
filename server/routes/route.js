const router = require("express").Router();
const path = require("path");
const {
  handleErrorNotFound,
  handleErrorServer,
} = require("../controllers/handleError");
const { isAuthProtected, isUserLogined } = require("../controllers/middleware");

const {
  postSignUp,
  addListController,
  logout,
  signin,
  getUserData,
  deleteListController,
} = require("../controllers");
router.post("/login", signin);
router.post("/signUp", postSignUp);
router.get("/signUp", isUserLogined, (req, res) => {
  res.sendFile(
    path.join(__dirname, "..", "..", "public", "html", "signUp.html")
  );
});
router.get("/login", isUserLogined, (req, res) => {
  res.sendFile(
    path.join(__dirname, "..", "..", "public", "html", "login.html")
  );
});
router.get("/home", isAuthProtected, (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "public", "html", "home.html"));
});

router.post("/addtolist", isAuthProtected, addListController);
router.get("/list", isAuthProtected, getUserData);
router.get("/logout", logout);
router.delete("/delete/:id", deleteListController);
router.use(handleErrorNotFound);
router.use(handleErrorServer);

module.exports = router;
