const {listQuery} = require('../database/queries');

const getUserData = (req,res)=>{

    listQuery()
    .then(data => 
        
        res.json(data.rows)
    )
    .catch((err) => res.status(500).json({ msg: 'Internal Server Error', err }))
}

module.exports = getUserData;
