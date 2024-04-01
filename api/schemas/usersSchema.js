const Joi = require('joi');

// Definir los datos y sus condiciones
const id = Joi.number().integer();
const userName = Joi.string().min(3).max(45).pattern(/^[\w\s]+$/);
const userEmail = Joi.string().email();
const userAvatar = Joi.string().uri();
const userAddress = Joi.string().min(3);
const userPhone = Joi.number().min(3);
const userBirthdate = Joi.date().iso();
const userCreatedAt = Joi.date().iso();
const userRole = Joi.string().min(4).max(12);

// Esquema para crear un producto
const createUserSchema = Joi.object({
  userName: userName.required(),
  userEmail: userEmail.required(),
  userAvatar: userAvatar.required(),
  userAddress: userAddress.required(),
  userPhone: userPhone.required(),
  userBirthdate: userBirthdate,
  userCreatedAt: userCreatedAt,
  userRole: userRole,
});

// Esquema para traer un usuario por ID
const getUserSchema = Joi.object({
  id: id.required(),
});

// Esquema para actualizar un usuario
const updateUserSchema = Joi.object({
  userName: userName,
  userEmail: userEmail,
  userAvatar: userAvatar,
  userAddress: userAddress,
  userPhone: userPhone,
  userBirthdate: userBirthdate,
  userRole: userRole,
});

module.exports = { createUserSchema, getUserSchema, updateUserSchema };
