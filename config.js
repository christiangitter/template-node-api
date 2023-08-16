require("dotenv").config();
const config = {
  db: {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    connectTimeout: 60000,
    port: process.env.PORT,
  },
  listPerPage: 10,
};
module.exports = config;
