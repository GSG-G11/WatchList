const router = require('express').Router();

const {handleErrorNotFound, handleErrorServer} =require('../controllers/handleError');








router.use(handleErrorNotFound);
router.use(handleErrorServer);

module.exports= router;