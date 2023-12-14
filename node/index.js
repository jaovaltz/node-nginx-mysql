const express = require("express");
const app = express();

const config = {
  host: "db",
  user: "root",
  password: "root",
  database: "nodedb",
};

const mysql = require("mysql");
const connection = mysql.createConnection(config);

const sql = `CREATE TABLE IF NOT EXISTS people (
  id int(11) NOT NULL AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;`;

connection.query(sql, function (error, results, fields) {
  if (error) throw error;
  console.log("Tabela criada com sucesso!");
});

const insert = `INSERT INTO people(name) values('João');`;
connection.query(insert, function (error, results, fields) {
  if (error) throw error;
  console.log("Registro inserido com sucesso!");
});

app.get("/", (req, res) => {
  const sql = "SELECT * FROM people";
  connection.query(sql, function (error, results, fields) {
    if (error) throw error;
    const resultsJoined = results.map((result) => result.name).join("</br>");
    res.send(`<h1>Full Cycle Rocks!</h1></br>${resultsJoined}`);
  });
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
