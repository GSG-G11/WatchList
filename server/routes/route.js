const router = require("express").Router();
const {
  handleErrorNotFound,
  handleErrorServer,
} = require("../controllers/handleError");
const signin = require("../controllers/handelSignin");

const postSignUp = require("../controllers");

router.post("/signUp", postSignUp);
router.post("/login", signin);

router.use(handleErrorNotFound);
router.use(handleErrorServer);

module.exports = router;
