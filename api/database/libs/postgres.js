// Importar la clase Client del paquete pg
const { Client } = require('pg');
const { config } = require('../config/config');

// Conexión a la base de datos
async function getConnection() {
  const client = new Client({
    host: config.dbHost,
    port: config.dbPort,
    user: config.dbUser,
    password: config.dbPassword,
    database: config.dbName
  });
  await client.connect();
  return client;
}

module.exports = getConnection;
