const router = require("express").Router();
const path = require('path');
const {
  handleErrorNotFound,
  handleErrorServer,
} = require("../controllers/handleError");
const isAuthProtected = require('../controllers/middleware');

const {postSignUp,addListController,logout,signin,getUserData} = require("../controllers");

router.post("/signUp", postSignUp);
router.post("/login", signin);

router.get('/home',isAuthProtected,(req, res) => {
  res.sendFile(path.join(__dirname, '..','..', 'public', 'html','home.html'))});

router.post('/addtolist',isAuthProtected,addListController);
router.get("/list",getUserData);
router.get('/logout',logout)

router.use(handleErrorNotFound);
router.use(handleErrorServer);

module.exports = router;
