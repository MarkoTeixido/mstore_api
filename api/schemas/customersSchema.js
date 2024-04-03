const Joi = require('joi');

// Definir los datos y sus condiciones
const id = Joi.number().integer();
const name = Joi.string().min(2).max(20);
const lastname = Joi.string().min(2).max(20);
const address = Joi.string().min(3);
const phone = Joi.number().min(3);
const birthdate = Joi.date().iso();

// Esquema para crear un cliente
const createCustomerSchema = Joi.object({
  name: name.required(),
  lastname: lastname.required(),
  address: address.required(),
  phone: phone.required(),
  birthdate: birthdate,
});

// Esquema para traer un cliente por ID
const getCustomerSchema = Joi.object({
  id: id.required(),
});

// Esquema para actualizar un cliente
const updateCustomerSchema = Joi.object({
  name: name,
  lastname: lastname,
  address: address,
  phone: phone,
  birthdate: birthdate,
});

module.exports = { createCustomerSchema, getCustomerSchema, updateCustomerSchema };
