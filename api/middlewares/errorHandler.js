// Instancia propia de Sequelize para detectar errores
const { ValidationError } = require('sequelize');

// Middleware para manejar errores generales en la aplicación
// eslint-disable-next-line no-unused-vars
function errorHandler (err, req, res, next) {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
};

// Middleware para manejar errores con el módulo Boom
function boomErrorHandler (err, req, res, next) {
  if(err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  } else {
    next(err);
  }
};

// Middleware para manejar errores específicos de Sequelize
function ormErrorHandler(err, req, res, next) {
  if (err instanceof ValidationError) {
    res.status(409).json({
      statusCode: 409,
      message: err.name,
      errors: err.errors
    });
  }
  next(err);
}

module.exports = { errorHandler, boomErrorHandler, ormErrorHandler };
