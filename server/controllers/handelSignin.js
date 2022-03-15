const schema = require('../utils/validation/signinValiadtion');
const userQuery = require('../database/queries/getUserQueries')

const signin =(req,res)=>{
    schema.validateAsync(req.body)
    .then(value => {
        comparePasswords('12345678',userQuery)
    })
    .catch(error => console.log(error))
}

module.exports =  signin;
