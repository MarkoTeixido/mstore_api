const Joi = require('joi');

// Definir los datos y sus condiciones
const id = Joi.number().integer();
const name = Joi.string().min(2).max(20);
const lastname = Joi.string().min(2).max(20);
const address = Joi.string().min(3);
const phone = Joi.string().min(3);
const birthdate = Joi.date().iso();
const userId = Joi.number().integer().min(1).max(2);
const email = Joi.string().email();
const password = Joi.string().min(5);


// Esquema para crear un cliente
const createCustomerSchema = Joi.object({
  name: name.required(),
  lastname: lastname.required(),
  address: address.required(),
  phone: phone.required(),
  birthdate: birthdate,
  user: Joi.object({
    email: email.required(),
    password: password.required(),
  }),
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
  userId: userId,
});


module.exports = { createCustomerSchema, getCustomerSchema, updateCustomerSchema };
