import { db } from "./server.js";

db.query(`CREATE TABLE IF NOT EXISTS guestbook (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(100),
    email VARCHAR(100),
    phone INT,
    words VARCHAR(1000),
)`);
