const Joi = require('joi');

// Definir los datos y sus condiciones
const id = Joi.number().integer();
const name = Joi.string().min(3).max(15);
const image = Joi.string().uri();


// Esquema para crear una categoria
const createCategorySchema = Joi.object({
  name: name.required(),
  image: image.required()
});

// Esquema para actualizar una categoria
const updateCategorySchema = Joi.object({
  name: name,
  image: image
});

// Esquema para traer una categoria por ID
const getCategorySchema = Joi.object({
  id: id.required(),
});


module.exports = { createCategorySchema, updateCategorySchema, getCategorySchema }
