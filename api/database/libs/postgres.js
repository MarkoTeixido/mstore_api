const { Client } = require('pg');

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
