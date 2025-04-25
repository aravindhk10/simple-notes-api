require("dotenv").config();
const { Pool } = require("pg");

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

pool.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.error("DB connection failed:", err);
  } else {
    console.log("DB time:", res.rows[0]);
  }
  pool.end(); // close connection
});
