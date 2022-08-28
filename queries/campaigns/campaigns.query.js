const { pool } = require("../../config/sql.config");

// create table
exports.createCampaignTable = async () => {
  const query = `
                CREATE TABLE campaigns (id INT AUTO_INCREMENT, name VARCHAR(255) NOT NULL, expireDate VARCHAR(255) NOT NULL, activity BOOLEAN NOT NULL, slug VARCHAR(255) NOT NULL, therapyAirSmartPrice INT NOT NULL, therapyAirSmartDiscountPrice INT NOT NULL, therapyAiriOnWhite INT NOT NULL, therapyAiriOnWhiteDiscountPrice INT NOT NULL, therapyAiriOnBlack INT NOT NULL, therapyAiriOnBlackDiscountPrice INT NOT NULL,  PRIMARY KEY(id) )
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
exports.renameColumn = async () => {
  const query = `
              ALTER TABLE campaigns
              RENAME COLUMN "test" TO "promotionGroup"
  `;

  const [rows] = await pool.query(query);
};

// delete table
exports.deleteTable = async () => {
  const query = `
            DROP TABLE campaigns
`;
  const [rows] = await pool.query(query);
};

// create campaign
exports.create = async ({
  name,
  expireDate,
  activity,
  slug,
  therapyAirSmartDiscountPrice,
  therapyAiriOnWhiteDiscountPrice,
  therapyAiriOnBlackDiscountPrice,
  therapyAirSmartPrice,
  therapyAiriOnWhite,
  therapyAiriOnBlack,
}) => {
  const query = `
                INSERT INTO campaigns (
                    name, 
                    expireDate, 
                    activity, 
                    slug, 
                    therapyAirSmartDiscountPrice, 
                    therapyAiriOnWhiteDiscountPrice, 
                    therapyAiriOnBlackDiscountPrice, 
                    therapyAirSmartPrice, 
                    therapyAiriOnWhite, 
                    therapyAiriOnBlack
                  )
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

  const [rows] = await pool.query(query, [
    name,
    expireDate,
    activity,
    slug,
    therapyAirSmartDiscountPrice,
    therapyAiriOnWhiteDiscountPrice,
    therapyAiriOnBlackDiscountPrice,
    therapyAirSmartPrice,
    therapyAiriOnWhite,
    therapyAiriOnBlack,
  ]);

  return rows;
};

// get all campaign
exports.getAll = async () => {
  const query = `
                SELECT * FROM campaigns
  `;

  const [rows] = await pool.query(query);
  return rows;
};

// get campaign
exports.getById = async (id) => {
  const query = `
              SELECT
                    id, 
                    name, 
                    expireDate, 
                    activity, 
                    slug, 
                    therapyAirSmartDiscountPrice, 
                    therapyAiriOnWhiteDiscountPrice, 
                    therapyAiriOnBlackDiscountPrice, 
                    therapyAirSmartPrice, 
                    therapyAiriOnWhite,
                    therapyAiriOnBlack
              FROM campaigns
              WHERE id = ?
  `;

  const [rows] = await pool.query(query, [id]);
  return rows;
};

// get campaign by slug
exports.getBySlug = async (slug) => {
  const query = `
            SELECT 
                  id,
                  name, 
                  expireDate, 
                  activity, 
                  slug, 
                  therapyAirSmartDiscountPrice, 
                  therapyAiriOnWhiteDiscountPrice, 
                  therapyAiriOnBlackDiscountPrice, 
                  therapyAirSmartPrice, 
                  therapyAiriOnWhite, 
                  therapyAiriOnBlack
            FROM campaigns
            WHERE slug = ? 
  `;

  const [rows] = await pool.query(query, [slug]);
  return rows;
};

// update campaign
exports.update = async (
  id,
  {
    name,
    expireDate,
    activity,
    slug,
    therapyAirSmartDiscountPrice,
    therapyAiriOnWhiteDiscountPrice,
    therapyAiriOnBlackDiscountPrice,
    therapyAirSmartPrice,
    therapyAiriOnWhite,
    therapyAiriOnBlack,
  }
) => {
  const query = `
              UPDATE campaigns
              SET 
                 name = ?, 
                 expireDate = ?, 
                 activity = ?, 
                 slug = ?, 
                 therapyAirSmartDiscountPrice = ?, 
                 therapyAiriOnWhiteDiscountPrice = ?, 
                 therapyAiriOnBlackDiscountPrice = ?, 
                 therapyAirSmartPrice = ?, 
                 therapyAiriOnWhite = ?, 
                 therapyAiriOnBlack = ?
              WHERE id = ?
  `;

  const [row] = await pool.query(query, [
    name,
    expireDate,
    activity,
    slug,
    therapyAirSmartDiscountPrice,
    therapyAiriOnWhiteDiscountPrice,
    therapyAiriOnBlackDiscountPrice,
    therapyAirSmartPrice,
    therapyAiriOnWhite,
    therapyAiriOnBlack,
    id,
  ]);
  return row;
};

// delete campaign
exports.deleteById = async (id) => {
  const query = `
                DELETE FROM campaigns
                WHERE id = ?
  `;
  const [rows] = await pool.query(query, [id]);
  return rows;
};
