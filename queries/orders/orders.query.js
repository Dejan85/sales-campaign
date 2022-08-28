const { pool } = require("../../config/sql.config");

// create table
exports.createOrdersTable = async () => {
  const query = `
                CREATE TABLE orders (id INT AUTO_INCREMENT, name VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL, address VARCHAR(255) NOT NULL, quantity INT NOT NULL, terms VARCHAR(255), wishDiscount INT, message VARCHAR(255), PRIMARY KEY(id) )
    `;

  const [row] = await pool.query(query);
};

// add column to table
exports.addColumn = async () => {
  const query = `
                ALTER TABLE orders
                ADD model VARCHAR(255) NOT NULL
    `;

  const [rows] = await pool.query(query);
};

// create order
exports.create = async ({
  name,
  phone,
  email,
  address,
  quantity,
  terms,
  wishDiscount,
  message,
  model,
}) => {
  const query = `
                  INSERT INTO orders(
                    name,
                    phone,
                    email,
                    address,
                    quantity,
                    terms,
                    wishDiscount,
                    message,
                    model
                  )
                 VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)
    
    `;

  const [rows] = await pool.query(query, [
    name,
    phone,
    email,
    address,
    quantity,
    terms,
    wishDiscount,
    message,
    model,
  ]);

  return rows;
};

// get all orders
exports.getAll = async () => {
  const query = `
                SELECT * FROM orders
  `;

  const [rows] = await pool.query(query);

  return rows;
};

// delete order
exports.deleteById = async (id) => {
  const query = `
                DELETE FROM orders
                WHERE id = ?
  `;

  const [rows] = await pool.query(query, [id]);
  return rows;
};
