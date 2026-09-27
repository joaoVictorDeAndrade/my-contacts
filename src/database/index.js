// Esse arquivo serve para conectar o app Node Js com o Postgres
const { Client } = require("pg");
const config = require("../config");

const client = new Client(config.database);

client.connect();

module.exports.query = async (query, values) => {
  const { rows } = await client.query(query, values);
  return rows;
};
