// Importar la clase Client del paquete pg
const { Client } = require('pg');

// Conexión a la base de datos
async function getConnection() {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'marko-',
    password: 'markoadmin',
    database: 'mstore-api'
  });
  await client.connect();
  return client;
}

module.exports = getConnection;
