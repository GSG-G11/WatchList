const schema = require('../utils/validation/signinValiadtion');
const bcrypt = require("bcryptjs");
const {getUsers,getUserByEmail} = require('../database/queries');


// comparePasswords('12345678',userQuery)
const signin =(req,res)=>{
    const {password}= req.body;
    schema.validateAsync(req.body)
    .then(value => getUserByEmail(value.email))
    .then(data=> 
        {
        if(!data.rows.length){
    res.json('user not found')
    }else{
        bcrypt.compare(password, data.rows[0].password).then(data => {
           if(data === false){
            res.json('password error')
           }else{
            res.json('welcome')
           }
        
        });
    }
}
        )

}
module.exports =  signin;
