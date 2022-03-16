
const connection = require('../config/connection');

const listQuery = ()=>{
    const sql ={
    text: 'SELECT list.id,list.name, list.episodes, list.type, list.cover_url, users.userName FROM list JOIN users ON (list.user_id = users.id);',
    values:[]
}
return connection.query(sql)
}

module.exports=listQuery;
