

const logout= (req,res)=>{
    res.clearCookie('id').redirect('/');
}

module.exports=logout;