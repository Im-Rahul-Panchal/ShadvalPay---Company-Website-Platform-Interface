import express from "express";
import mysql from "mysql2";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();

// ES module fix for __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// app.use(cors());
app.use(express.json());

const host = process.env.DB_HOST;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_NAME;
const port = process.env.PORT;

// DB details
const db = mysql.createPool({
  host: host,
  user: user,
  password: password,
  database: database,
  waitForConnections: true,
  //   port: 3306,
});

db.getConnection((err, connection) => {
  if (err) {
    console.error("Database connection failed:", err);
  } else {
    console.log("Connected to MySQL ✅");
    connection.release();
  }
});

// Contact API
app.post("/api/contact", (req, res) => {
  const { name, phone, email, message, addedon} = req.body;

  const sql = 
    `INSERT INTO ContactDatalist 
    (name, phone, email, message, addedon)
    VALUES (?, ?, ?, ?, ?)`;

  db.query(sql, [name, phone, email, message, addedon], (err, result) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json({ message: "Database error" });
    }

    res.json({ message: "Message saved successfully" });
  });
});


// React static folder
app.use(express.static(path.join(__dirname, "public")));

// React routing handle
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});


app.listen(port, () => {
  console.log(`Server running on port ${port} 🚀`);
});
