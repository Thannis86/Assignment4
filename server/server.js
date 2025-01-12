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

// Submitted Data from client

// app.post("/submit-data", async (req, res) => {
//   const data = req.body;
//   console.log("data received", data);
//   res.send({ message: "Data Received", receivedData: data });
//   console.log(data.name)
// });

// Sending DB rows from DB to client

app.get("/guestbook", async (req, res) => {
  const query = await db.query(`SELECT * FROM guestbook`);
  await res.json(query.rows);
  await console.log(query.rows);
});

// Sending rows from server to DB

app.post("/submit-data", async (req, res) => {
  const data = req.body.formValues;
  const query = await db.query(
    `INSERT INTO guestbook (name, email, phone, words)
VALUES(
'Cameron', 'thannis86@gmail.com','079712345','Yes')`
  );
  await res.json(query.rows);
  await console.log(query.rows);
});

//

app.get("/", (req, res) => {
  res.json({ message: "This is the root route" });
});

// app.post("/add-guest", async (req, res) => {
//   const { name, email, phone, words } = req.body;

//   const query = `
//     INSERT INTO guestbook (name, email, phone, words)
//     VALUES ($1, $2, $3, $4)
//   `;
//   const values = [name, email, phone, words];

//   try {
//     await db.query(query, values);
//     res.status(200).send("Guest added successfully!");
//   } catch (err) {
//     console.error("Error inserting data:", err);
//     res.status(500).send("An error occurred while inserting data");
//   }
// });

db.connect()
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log("Error connecting to DB"));
