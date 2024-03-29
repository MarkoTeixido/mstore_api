const Joi = require('joi');

const id = Joi.number().integer();
const categoryName = Joi.string().min(3).max(15);
const categoryImage = Joi.string().uri();

const createCategorySchema = Joi.object({
  name: categoryName.required(),
  image: categoryImage.required()
});

const updateCategorySchema = Joi.object({
  name: categoryName,
  image: categoryImage
});

const getCategorySchema = Joi.object({
  id: id.required(),
});

module.exports = { createCategorySchema, updateCategorySchema, getCategorySchema }
