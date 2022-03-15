
 const Joi = require('joi');
const postSignUp=(req,res)=>{
    // console.log(req.body);
const signupSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30)
    .required(),
    email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required(),

  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
  confirmPassword: Joi.ref('password')
});

try {
    signupSchema.validateAsync(req.body)
  .then(data=>console.log(data))
  .catch(err=>console.log(err));

}
catch (err) {
  console.log(err);
 }








}










module.exports=postSignUp;