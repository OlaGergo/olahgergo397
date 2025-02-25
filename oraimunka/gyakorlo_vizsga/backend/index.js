const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
 
const app = express();
app.use(express.json());
app.use(cors());
 
// MySQL adatbázis kapcsolat
const db = mysql.createConnection({
  host: "localhost",  
  user: "root",      
  password: "",      
  database: "fogado",
  port: 3307
});
 
// Kapcsolódás az adatbázishoz
db.connect(err => {
  if (err) {
    console.error("Hiba a MySQL kapcsolódás során:", err);
    return;
  }
  console.log("Sikeres MySQL kapcsolat!");
});
 
// Főoldal teszt
app.get("/", (req, res) => {
  res.send("Backend működik!");
});
 
// Vendégek lekérése
app.get("/vendegek", (req, res) => {
  db.query("SELECT * FROM vendegek", (err, results) => {
    if (err) {
      console.error("Hiba a vendégek lekérésekor:", err);
      res.status(500).send("Adatbázis hiba!");
      return;
    }
    res.json(results);
  });
});
 
// Vendég hozzáadása
app.post("/vendegek", (req, res) => {
  const { vsorsz, vnev, irsz } = req.body;
  const sql = "INSERT INTO vendegek (vsorsz, vnev, irsz) VALUES (?, ?, ?)";
  db.query(sql, [vsorsz, vnev, irsz], (err, result) => {
    if (err) {
      console.error("Hiba a vendég hozzáadásakor:", err);
      res.status(500).send("Adatbázis hiba!");
      return;
    }
    res.json({ message: "Vendég sikeresen hozzáadva!", id: result.insertId });
  });
});
 
// Vendég törlése
app.delete("/vendegek/:vsorsz", (req, res) => {
  const { vsorsz } = req.params;
  const sql = "DELETE FROM vendegek WHERE vsorsz = ?";
  db.query(sql, [vsorsz], (err, result) => {
    if (err) {
      console.error("Hiba a vendég törlésekor:", err);
      res.status(500).send("Adatbázis hiba!");
      return;
    }
    res.json({ message: "Vendég törölve!" });
  });
});
 
// Szerver indítása
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Szerver fut: http://localhost:${PORT}`);
});
 
 