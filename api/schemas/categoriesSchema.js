const Joi = require('joi');

const id = Joi.number().integer();
const categoryName = Joi.string().min(3).max(15);
const categoryImage = Joi.string().uri();

const createCategorySchema = Joi.object({
  categoryName: categoryName.required(),
  categoryImage: categoryImage.required()
});

const updateCategorySchema = Joi.object({
  categoryName: categoryName,
  categoryImage: categoryImage
});

const getCategorySchema = Joi.object({
  id: id.required(),
});

module.exports = { createCategorySchema, updateCategorySchema, getCategorySchema }
