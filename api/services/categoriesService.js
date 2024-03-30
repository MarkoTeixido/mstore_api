const boom = require('@hapi/boom');
const { models } = require('../database/libs/sequelize');

class CategoryService {

  constructor(){
  }
  async create(data) {
    return data;
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

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    return { id };
  }

}

module.exports = CategoryService;
