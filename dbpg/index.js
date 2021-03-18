const Pool = require('pg').Pool;
const config = require('../config');

const pool = new Pool({
    user: config.db.user,
    password: null,
    port: config.db.port,
    database: config.db.name,
    host: config.db.host
});

module.exports = pool;