// Esse arquivo serve para conectar o app Node Js com o Postgres
const { Client } = require("pg");

// port, user e password foram definidos na hora de rodar o container Postgres
const client = new Client({
  host: "localhost",
  port: 5432,
  user: "root",
  password: "root",
  database: "mycontacts",
});

client.connect();

module.exports.query = async (query) => {
  const { rows } = await client.query(query);
  return rows;
};
