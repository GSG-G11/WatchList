const connection = require('../config/connection');

const PostListQuery = (name,episodes,type,cover_url,user_id)=>{
    const sql ={
    text: 'INSERT INTO list(name,episodes,type,cover_url,user_id) VALUES ($1, $2, $3,$4,$5) returning *;' ,
    values:[name,episodes,type,cover_url,user_id]
}
return connection.query(sql)
}

module.exports=PostListQuery;
