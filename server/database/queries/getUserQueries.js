const connection = require('../config/connection');

const getUserQuery = () => connection.query({
    text: 'select password from users'
});

module.exports = getUserQuery;