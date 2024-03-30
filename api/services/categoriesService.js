const boom = require('@hapi/boom');
const { models } = require('../database/libs/sequelize');

class CategoryService {
  constructor(){
  }

  async create(categoryName, categoryImage) {
    const newCategory = await models.Category.create({
      categoryName,
      categoryImage,
    });

    return newCategory;
  }

  async find() {
    const categories = await models.Category.findAll();
    if (categories.length === 0) {
      throw boom.notFound('There are no categories available.');
    }
    return categories;
  }

  async findOne(id) {
    const category = await models.Category.findByPk(id);
    if (category.length === 0) {
      throw boom.notFound('Category not found.');
    }
    return category;
  }

  async update(id, updatedData) {
    const category = await this.findOne(id);
    const categoryUpdated = await category.update(updatedData);
    return categoryUpdated;
  }

  async delete(id) {
    const category = await this.findOne(id);
    await category.destroy();
  }
};

module.exports = CategoryService;
