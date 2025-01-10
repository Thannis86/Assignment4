import express, { query } from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.listen(8080, function () {
  console.log("Server running in port 8080");
});

app.get("/", (req, res) => {
  res.json({ message: "This is the root route" });
});

import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const dbConnectionString = process.env.DATABASE_URL;

export const db = new pg.Pool({
  connectionString: dbConnectionString,
});

app.get("/guestbook", async (req, res) => {
  const query = await db.query(`SELECT * FROM guestbook`);
  await res.json(query.rows);
  await console.log(query.rows);
});

app.post("/new-data", async (req, res) => {
  const data = req.body.formValues;
  const query = await db.query(
    `INSERT INTO guestbook (name, email, phone, words, images)
VALUES(
'Cameron', 'thannis86@gmail.com','07939937580','None','true')`
  );
  await res.json(query.rows);
  await console.log(query.rows);
});
