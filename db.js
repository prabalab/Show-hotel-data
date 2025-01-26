const { Pool } = require("pg");

// Configure PostgreSQL connection
const pool = new Pool({
  user: "mithun",      // Replace with your PostgreSQL username
  host: "dpg-cu8uf0popnds73amc970-a",      // Replace with your PostgreSQL host
  database: "mypostdb_qous",    // Replace with your PostgreSQL database name
  password: "L5IrwOllQmpL2yioNJHZiyRnGRVI1TNU",  // Replace with your PostgreSQL password
  port: 5432,             // Default PostgreSQL port
});

// Export the pool for use in other files
module.exports = pool;
