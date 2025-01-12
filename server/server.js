// Packages

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pg from "pg";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Server Start

const port = 8080;

app.listen(port, function () {
  console.log(`Server running in port ${port}`);
});

// DB Connection

const dbConnectionString = process.env.DATABASE_URL;

export const db = new pg.Pool({
  connectionString: dbConnectionString,
});

// Sending DB rows from DB to client

app.get("/guestbook", async (req, res) => {
  const query = await db.query(`SELECT * FROM guestbook`);
  await res.json(query.rows);
  await console.log(query.rows);
});

//

app.get("/", (req, res) => {
  res.json({ message: "This is the root route" });
});

// Submitted Data from client

app.post("/submit-data", async (req, res) => {
  const data = req.body;
  console.log("Data received:", data);
  const { name, email, phone, words } = data;
  const query = `
      INSERT INTO guestbook (name, email, phone, words)
      VALUES ($1, $2, $3, $4)
    `;
  await db.query(query, [name, email, phone, words]);
});

// Test DB connection

db.connect()
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log("Error connecting to DB"));
