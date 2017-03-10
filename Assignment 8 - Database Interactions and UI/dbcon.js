var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit:10,
    host:'mysql.eecs.oregonstate.edu',
    user:'cs290_moldenhp',
    password:'3915',
    database:'cs290_moldenhp'
});
module.exports.pool = pool;
