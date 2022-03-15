const router = require('express').Router();

const {handleErrorNotFound, handleErrorServer} =require('../controllers/handleError');


router.post('/signUp' ,(req,res)=>{
    console.log(req.body);
})







router.use(handleErrorNotFound);
router.use(handleErrorServer);

module.exports= router;