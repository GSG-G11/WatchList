const router = require("express").Router();
const postSignUp = require("../controllers");

const {
  handleErrorNotFound,
  handleErrorServer,
} = require("../controllers/handleError");

router.post("/signUp", postSignUp);

router.use(handleErrorNotFound);
router.use(handleErrorServer);

module.exports = router;
