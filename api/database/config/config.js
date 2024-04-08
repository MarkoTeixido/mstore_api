// Importar el módulo dotenv y cargar las variables de entorno desde el archivo .env
require('dotenv').config();

// Objeto de configuración con los valores de las variables de entorno
const config = {
	env: process.env.NODE_ENV || 'dev',
	port: process.env.PORT || 3000,
	dbUser: process.env.DB_USER,
	dbPassword: process.env.DB_PASSWORD,
	dbHost: process.env.DB_HOST,
	dbPort: process.env.DB_PORT,
	dbName: process.env.DB_NAME,
};

module.exports = { config };
