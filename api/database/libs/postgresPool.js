const { Pool } = require('pg');
const { config } = require('../config/config');

// Construir la URI de conexión a la base de datos PostgreSQL
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

// Instancia de Pool utilizando la URI de conexión
const pool = new Pool({ connectionString: URI });

module.exports = pool;
