const config = {
    db: {
        host: "HOST",
        user: "USER",
        password: "PASSWORD",
        database: "DATABASE",
        connectTimeout: 60000,
        //MySQL default port is 3306
        //port: 3306,
    },
    listPerPage: 10,
};
module.exports = config;