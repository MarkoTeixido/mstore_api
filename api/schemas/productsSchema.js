const Joi = require('joi');

// Definir los datos y sus condiciones
const id = Joi.number().integer();
const name = Joi.string().min(3).max(45);
const price = Joi.number().integer().min(10);
const image = Joi.string().uri();
const description = Joi.string().min(10);
const categoryId = Joi.number().integer();
//--
const limit = Joi.number().integer();
const offset = Joi.number().integer();
const price_min = Joi.number().integer();
const price_max = Joi.number().integer();


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

// Esquema para traer productos filtrados
const queryProductSchema = Joi.object({
  limit,
  offset,
  price_min,
  price_max: price_max.when('price_min', {
    is: Joi.number().integer(),
    then: Joi.required()
  })
});


module.exports = { createProductSchema, getProductSchema, updateProductSchema, queryProductSchema };
