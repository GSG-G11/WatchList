

const isAuthProtected = (req, res, next) => {
  console.log(req.cookies.id,'helllo')
    // const { id } = req.cookies;
  
    // if (id) {
    //   verify(id, process.env.privateKey, (err, id) => {
    //     if (err) {
    //       res.clearCookie('id');
    //       res.redirect('/');
    //     }
  
    //     req.id = id;
    //     next();
    //   });
    // } else {
    //   res.redirect('/');
    // }
  };


  module.exports=isAuthProtected;