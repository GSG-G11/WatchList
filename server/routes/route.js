const router = require("express").Router();
const {handleErrorNotFound, handleErrorServer} =require('../controllers/handleError');
const signin = require('../controllers/handelSignin')
router.post('/login' ,signin)



const postSignUp = require("../controllers");


const {
  handleErrorNotFound,
  handleErrorServer,
} = require("../controllers/handleError");

router.post("/signUp", postSignUp);

router.use(handleErrorNotFound);
router.use(handleErrorServer);

module.exports = router;
