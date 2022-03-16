
const connection = require('../config/connection');


const listQuery = (userIdFinal)=>{
    const sql ={
    text: 'SELECT list.id,list.name, list.episodes, list.type, list.cover_url, users.userName FROM list JOIN users ON (list.user_id = users.id) where user_id=$1;',
    values:[userIdFinal]
}
return connection.query(sql)
}

module.exports=listQuery;
