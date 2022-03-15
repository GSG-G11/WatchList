require('env2')('config.env');
 const Joi = require('joi');
 const jwt = require("jsonwebtoken");
 const bcrypt = require("bcryptjs");
const postSign =require('../database/queries');

const postSignUp=(req,res)=>{
const signupSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30)
    .required(),
    email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required(),

  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
  confirmPassword: Joi.ref('password')
});
const {username,email}=req.body
try {
    signupSchema.validateAsync(req.body)
  .then(data=> bcrypt.hash(data.password, 8))
  .then(hashPassword=>postSign(username,email,hashPassword))
  .then(data=>{
    jwt.sign({id:data.rows[0].id}, process.env.privateKey, (err, token)=> {
        if(err){
            console.log(err)    
        }else{
          res.cookie('id',token).redirect('/');
        }
      });
  })
}
catch (err) {
  console.log(err);
 }








}










module.exports=postSignUp;