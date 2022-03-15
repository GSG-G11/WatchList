const router = require('express').Router();

const {handleErrorNotFound, handleErrorServer} =require('../controllers/handleError');
const signin = require('../controllers/handelSignin')

router.post('/signUp' ,(req,res)=>{
    console.log(req.body);
})

router.post('/login' ,signin)





router.use(handleErrorNotFound);
router.use(handleErrorServer);

module.exports= router;