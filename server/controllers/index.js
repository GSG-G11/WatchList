const postSignUp = require('./handelSignup');
const getUserData = require('./handlerGetUserData')

const addListController =require('./handelAddList');
const logout = require('./logout')
const signin=require('./handelSignin')
module.exports={postSignUp,addListController,logout,signin,getUserData};

