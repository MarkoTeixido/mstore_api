const Joi = require('joi');

// Definir los datos y sus condiciones
const id = Joi.string().uuid();
const productName = Joi.string().min(3).max(45);
const productPrice = Joi.number().integer().min(10);
const productImage = Joi.string().uri();

// Esquema para crear un producto
const createProductSchema = Joi.object({
  productName: productName.required(),
  productPrice: productPrice.required(),
  productImage: productImage.required(),
});

// Esquema para traer un producto por ID
const getProductSchema = Joi.object({
  id: id.required(),
});

// Esquema para actualizar un producto
const updateProductSchema = Joi.object({
  productName: productName,
  productPrice: productPrice,
  productImage: productImage,
});

module.exports = { createProductSchema, getProductSchema, updateProductSchema };
