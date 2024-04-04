const Joi = require('joi');

// Definir los datos y sus condiciones
const id = Joi.number().integer();
const email = Joi.string().email();
const password = Joi.string().min(5);
const userCreatedAt = Joi.date().iso();

// Esquema para crear un producto
const createUserSchema = Joi.object({
  email: email.required(),
  password: password.required(),
  userCreatedAt: userCreatedAt,
});

// Esquema para traer un usuario por ID
const getUserSchema = Joi.object({
  id: id.required(),
});

// Esquema para actualizar un usuario
const updateUserSchema = Joi.object({
  email: email,
  password: password,
});

module.exports = { createUserSchema, getUserSchema, updateUserSchema };
