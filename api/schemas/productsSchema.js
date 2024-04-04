const Joi = require('joi');

// Definir los datos y sus condiciones
const id = Joi.number().integer();
const name = Joi.string().min(3).max(45);
const price = Joi.number().integer().min(10);
const image = Joi.string().uri();
const description = Joi.string().min(10);
const categoryId = Joi.number().integer();

// Esquema para crear un producto
const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  image: image.required(),
  description: description.required(),
  categoryId: categoryId.required(),
});

// Esquema para traer un producto por ID
const getProductSchema = Joi.object({
  id: id.required(),
});

// Esquema para actualizar un producto
const updateProductSchema = Joi.object({
  name: name,
  price: price,
  image: image,
  description: description,
  categoryId: categoryId,
});

module.exports = { createProductSchema, getProductSchema, updateProductSchema };
