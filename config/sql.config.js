const mysql = require("mysql2/promise");
const dotenv = require("dotenv");
dotenv.config();

// exports.pool = mysql.createPool({
//   host: process.env.SQL_HOST,
//   user: process.env.SQL_USER,
//   password: process.env.SQL_PASSWORD,
//   database: process.env.SQL_NAME,
//   port: 3306,
//   waitForConnections: true,
//   connectionLimit: 60,
//   queueLimit: 1500,
//   multipleStatements: true,
//   dateStrings: true,
// });

let pool;

exports.init = () => {
  try {
    pool = createPool({
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
  } catch (error) {
    console.error("[mysql.connector][init][Error]: ", error);
    throw new Error("failed to initialized pool");
  }
};

exports.execute = (query, params) => {
  try {
    if (!pool)
      throw new Error(
        "Pool was not created. Ensure pool is created when running the app."
      );

    return new Promise((resolve, reject) => {
      pool.query(query, params, (error, results) => {
        if (error) reject(error);
        else {
          const headersExist =
            results[0] && results[0].fieldCount !== undefined;
          if (headersExist) {
            results = results[results.length - 1];
          }
          // console.log(results)
          resolve(results);
        }
      });
    });
  } catch (error) {
    console.error("[mysql.connector][execute][Error]: ", error);
    throw new Error("failed to execute MySQL query");
  }
};
