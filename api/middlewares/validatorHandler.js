/*
Este archivo define un middleware de validación que utiliza Joi para validar los datos de entrada en las solicitudes HTTP.
El middleware recibe un esquema de validación y el nombre de la propiedad en el cuerpo de la solicitud que se debe validar.
Si los datos no pasan la validación según el esquema proporcionado, el middleware responde con un error de tipo BadRequest utilizando Boom.
*/

const boom = require('@hapi/boom');

// Middleware de validación utilizando Joi
function validatorHandler(schema, property) {
  // Retorna una función middleware
  return (req, res, next) => {
    // Extrae la data del cuerpo de la solicitud
    const data = req[property];
    // Valida la data utilizando el esquema proporcionado (abortEarly: False -- significa que envia todos los errores que encuentra)
    const { error } = schema.validate(data, { abortEarly: false });
    // Si hay errores, los maneja utilizando 'boom' y pasa al siguiente middleware
    if (error) {
      next(boom.badRequest(error));
    }
    // Si no hay errores, pasa al siguiente middleware
    next();
  }
};

module.exports = validatorHandler;
