const axios = require('axios');

const getUsers = (id = '') => (
	axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
);

module.exports = getUsers;
