const {listQuery,getUsers} = require('../database/queries');

const getUserData = (req,res)=>{
    const idUser=(req.id);
    const userIdFinal = idUser.id;
    const getusers = getUsers(userIdFinal);
    const listQu = listQuery(userIdFinal);
    // getUsers(userIdFinal).then(data=>console.log(data))
    Promise.all([ getusers, listQu])
    .then((values) => {res.json([values[0].rows,values[1].rows])})
    .catch(e => console.error(e));
}

module.exports = getUserData;


// .then(data => 
    //     res.json(data.rows)
    // )
    // .catch((err) => res.status(500).json({ msg: 'Internal Server Error', err }))