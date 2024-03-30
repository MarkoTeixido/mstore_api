const Joi = require('joi');

// Definir los datos y sus condiciones
const id = Joi.number().integer();
const productName = Joi.string().min(3).max(45);
const productPrice = Joi.number().integer().min(10);
const productImage = Joi.string().uri();
const productCategory = Joi.number().integer();

// Esquema para crear un producto
const createProductSchema = Joi.object({
  productName: productName.required(),
  productPrice: productPrice.required(),
  productImage: productImage.required(),
  productCategory: productCategory.required(),
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
  productCategory: productCategory,
});

module.exports = { createProductSchema, getProductSchema, updateProductSchema };
