const Joi = require('joi');

// Definir los datos y sus condiciones
const id = Joi.number().integer();
const customerId = Joi.number().integer();
const orderId = Joi.number().integer();
const productId = Joi.number().integer();
const amount = Joi.number().integer().min(1);


// Esquema para crear una orden
const createOrderSchema = Joi.object({
  customerId: customerId.required(),
});

// Esquema para agregar un nuevo item a la orden
const addItemOrderSchema = Joi.object({
  orderId: orderId.required(),
  productId: productId.required(),
  amount: amount.required(),
});

// Esquema para traer una orden por ID
const getOrderSchema = Joi.object({
  id: id.required(),
});


module.exports = { createOrderSchema, addItemOrderSchema, getOrderSchema };
