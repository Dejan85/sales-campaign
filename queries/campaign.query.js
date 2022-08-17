const { pool } = require("../config/sql.config");

// create table
exports.createCampaignTable = async () => {
  const query = `
                CREATE TABLE campaigns (id INT AUTO_INCREMENT, name VARCHAR(255) NOT NULL, slug VARCHAR(255) NOT NULL, dateFrom VARCHAR(255) NOT NULL, dateTo VARCHAR(255) NOT NULL, active BOOLEAN NOT NULL, promotionsGroup VARCHAR(255) NOT NULL, PRIMARY KEY(id) )
    `;

  const [row] = await pool.query(query);
};

// add column to table
exports.addColumn = async () => {
  const query = `
              ALTER TABLE campaigns
              ADD price INT NOT NULL
  `;

  const [rows] = await pool.query(query);
};

// rename column of table
// exports.renameColumn = async () => {
//   const query = `
//               ALTER TABLE campaigns
//               RENAME COLUMN "test" TO "promotionGroup"
//   `;

//   const [rows] = await pool.query(query);
// };

// create campaign
exports.createCampaign = async ({
  name,
  slug,
  dateFrom,
  dateTo,
  active,
  promotionsGroup,
}) => {
  const query = `
                INSERT INTO campaigns (name, slug, dateFrom, dateTo, active, promotionsGroup, price)
                VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

  const [rows] = await pool.query(query, [
    name,
    slug,
    dateFrom,
    dateTo,
    active,
    promotionsGroup,
    price,
  ]);

  return rows;
};

// get all campaign
exports.getCampaigns = async () => {
  const query = `
                SELECT * FROM campaigns
  `;

  const [rows] = await pool.query(query);
  return rows;
};

// get campaign
exports.getCampaign = async (id) => {
  const query = `
              SELECT name, slug, dateFrom, dateTo, active, promotionsGroup, price
              FROM campaigns
              WHERE id = ?
  `;

  const [rows] = await pool.query(query, [id]);
  return rows;
};

// update campaign
exports.updateCampaign = async ({
  id,
  name,
  slug,
  dateFrom,
  dateTo,
  active,
  promotionsGroup,
  price,
}) => {
  console.log("test active", {
    id,
    name,
    slug,
    dateFrom,
    dateTo,
    active,
    promotionsGroup,
    price,
  });

  const query = `
              UPDATE campaigns
              SET name = ?, slug = ?, dateFrom = ?, dateTo = ?, active = ?, promotionsGroup = ?, price = ?
              WHERE id = ?
  `;

  const [row] = await pool.query(query, [
    name,
    slug,
    dateFrom,
    dateTo,
    active,
    promotionsGroup,
    price,
    id,
  ]);
  return row;
};

// delete campaign
exports.deleteCampaign = async (id) => {
  const query = `
                DELETE FROM campaigns
                WHERE id = ?
  `;
  const [rows] = await pool.query(query, [id]);
  return rows;
};
