const router = require("express").Router();
const path = require('path');
const {
  handleErrorNotFound,
  handleErrorServer,
} = require("../controllers/handleError");
const isAuthProtected = require('../controllers/middleware');
const signin = require("../controllers/handelSignin");

const {postSignUp,getUserData} = require("../controllers");

router.post("/signUp", postSignUp);
router.post("/login", signin);

router.get("/list",getUserData);


router.get('/home',isAuthProtected,(req, res) => {
  res.sendFile(path.join(__dirname, '..','..', 'public', 'html','home.html'))});

router.use(handleErrorNotFound);
router.use(handleErrorServer);

module.exports = router;
