const Joi = require('joi');

// Definir los datos y sus condiciones
const id = Joi.string().uuid();
const userName = Joi.string().min(3).max(45).pattern(/^[\w\s]+$/);
const userUsername = Joi.string().alphanum().min(3).max(15);
const userEmail = Joi.string().email();
const userAddress = Joi.string().min(3);
const userPhone = Joi.number().min(3);

// Esquema para crear un producto
const createUserSchema = Joi.object({
  userName: userName.required(),
  userUsername: userUsername.required(),
  userEmail: userEmail.required(),
  userAddress: userAddress.required(),
  userPhone: userPhone.required(),
});

// Esquema para traer un usuario por ID
const getUserSchema = Joi.object({
  id: id.required(),
});

// Esquema para actualizar un usuario
const updateUserSchema = Joi.object({
  userName: userName,
  userUsername: userUsername,
  userEmail: userEmail,
  userAddress: userAddress,
  userPhone: userPhone,
});

module.exports = { createUserSchema, getUserSchema, updateUserSchema };
