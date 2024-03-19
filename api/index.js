const express = require('express');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
const swaggerJsdoc = require("swagger-jsdoc")
const swaggerUi = require("swagger-ui-express");
const routerApi = require('./routes');
const { errorHandler, boomErrorHandler } = require('./middlewares/errorHandler');
const options = require('./Swagger');

const app = express();
const port = process.env.PORT || 3000;

// Configura Express para servir archivos estáticos desde el directorio 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Middleware externo de seguridad Helmet
app.use(helmet());

// Middleware externo para analizar el cuerpo de la solicitud como JSON
app.use(express.json());

// Configuración de CORS (Cross-Origin Resource Sharing)
const corsOptions = {
  methods: ['GET', 'POST', 'PATCH', 'DELETE'], // Métodos permitidos
  allowedHeaders: ['Content-Type', 'Authorization'], // Cabeceras permitidas
};

// Middleware externo de CORS para permitir solicitudes de origen cruzado
app.use(cors(corsOptions));

const specs = swaggerJsdoc(options);

app.use(
  "/api/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs)
);

// Ruta de inicio de la aplicación
app.get('/api', (req, res) => {
  res.send('Hello, this is my API in Node.js and Express.');
});

// Establecer las rutas de la API
routerApi(app);

// Middleware de manejo de errores personalizado
app.use(errorHandler);
app.use(boomErrorHandler);

// Iniciar el servidor y escuchar en el puerto establecido
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('My server is running on port: ' + port);
});
