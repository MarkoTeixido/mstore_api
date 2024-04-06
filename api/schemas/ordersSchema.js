const Joi = require('joi');

// Definir los datos y sus condiciones
const id = Joi.number().integer();
const customerId = Joi.number().integer();


// Esquema para crear un producto
const createOrderSchema = Joi.object({
  customerId: customerId.required(),
});

// Esquema para traer una orden por ID
const getOrderSchema = Joi.object({
  id: id.required(),
});


module.exports = { createOrderSchema, getOrderSchema };
