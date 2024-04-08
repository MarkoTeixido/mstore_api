const express = require('express');
const productsRouter = require('./productsRouter');
const categoriesRouter = require('./categoriesRouter');
const usersRouter = require('./usersRouter');
const customersRouter = require('./customersRouter');
const ordersRouter = require('./ordersRouter');

// Definir las rutas de la API
function routerApi(app){
  // Instancia de enrutador de express
  const router = express.Router();

  // Generar el enrutador en la ruta '/api/v1' del servidor
  app.use('/api/v1', router);

  // Asignación de las rutas específicas a los enrutadores correspondientes
  router.use('/products', productsRouter);
  router.use('/categories', categoriesRouter);
  router.use('/users', usersRouter);
  router.use('/customers', customersRouter);
  router.use('/orders', ordersRouter);
};

module.exports = routerApi;
