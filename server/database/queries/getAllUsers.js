const connection = require('../config/connection');

const getUsers = () => connection.query({
    text: 'select * from users ;'
});

module.exports = getUsers;