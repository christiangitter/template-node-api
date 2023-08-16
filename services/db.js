//ONLY NEEDED IF YOU ARE USING MYSQL
// DON'T FORGET TO INSTALL MYSQL2-PACKAGE
const mysql = require("mysql2/promise");
//import the config file to get the database credentials
const config = require("../config");

//function to query the database
async function query(sql, params) {
    const connection = await mysql.createConnection(config.db);
    const [results] = await connection.execute(sql, params);

    return results;
}

//export the query function for use in other files
module.exports = {
    query,
};