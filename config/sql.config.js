const mysql = require("mysql2/promise");
const dotenv = require("dotenv");
dotenv.config();

exports.pool = mysql.createPool({
  host: process.env.SQL_HOST,
  user: process.env.SQL_USER,
  password: process.env.SQL_PASSWORD,
  database: process.env.SQL_NAME,
  port: 3306,
  waitForConnections: true,
  connectionLimit: 60,
  queueLimit: 1500,
  multipleStatements: true,
  dateStrings: true,
});
