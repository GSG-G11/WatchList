
const connection = require('../config/connection');

const deleteListQuery = (id)=>{
    const sql ={
    text: 'delete from list where id=$1 returning *;',
    values:[id]
}
return connection.query(sql)
}

module.exports=deleteListQuery;

