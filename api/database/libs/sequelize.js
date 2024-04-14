const { Sequelize } = require('sequelize');
const { config } = require('../config/config');
const setupModels = require('../models/index');

// Construir la URI de conexión a la base de datos PostgreSQL
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

// Instancia de Sequelize utilizando la URI de conexión
const sequelize = new Sequelize(URI, {
  dialectModule: require('pg'),
  dialect: 'postgres',
  logging: true
});

// Configurar los modelos de la base de datos utilizando la instancia de Sequelize
setupModels(sequelize);

module.exports = sequelize;
