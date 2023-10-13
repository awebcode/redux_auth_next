const { Client } = require("pg");
// console.log("PGPASS", process.env.PG_PASS);
const client = new Client({
  user: process.env.PG_USER,
  host: "localhost", //duolancer.com
  database: process.env.PG_DB,
  password: process.env.PG_PASS,
  port: 5432, // Default PostgreSQL port
});

 client.connect();

module.exports = client;
