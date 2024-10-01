import mysql from "mysql2/promise";
import "dotenv/config";
import { table_create_query } from "./table_query.js";

// Create connection to MySQL database
const db = await mysql.createConnection(
  "mysql://" +
    process.env.DB_USER +
    ":" +
    process.env.DB_PASSWORD +
    "@" +
    process.env.DB_HOST +
    ":" +
    process.env.DB_PORT +
    "/" +
    process.env.DB_NAME
);
console.log("Connected to database");

// Create table if it doesn't exist
await db.query(table_create_query);

export default db;
